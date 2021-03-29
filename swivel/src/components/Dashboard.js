import MainNav from "./MainNav"
import SideNav from "./SideNav"
import Tabs from "./Tabs"
import Search from "./Search"
import NoMatches from "./NoMatches"

import React, { useState, useEffect } from 'react'
import Amplify, { API, Auth, Hub } from 'aws-amplify'
import {Link, Redirect} from 'react-router-dom'
import { listMatchs } from '../graphql/queries'

const matchList = {}

const Dashboard = ( ) => {
  const [redirectToLogin, setRedirectToLogin] = useState(false)
  const [matches, setMatches] = useState(matchList);

  useEffect(() => {
    let isCancelled = false
    Auth.currentSession()
      .then(currUser => {
        var userID = currUser['idToken']['payload']['sub']
        getMatches(userID)
        return () => {
          isCancelled = true
        }
       })
      .catch(err => {
        setRedirectToLogin(true)
      })
  })


  async function getMatches(userID) {
    await API.graphql({ query: listMatchs, variables: {id: userID.toString() }}).then(response => {
      var matches = response.data.listMatchs.items;
      if(matches.length == 0){
        setMatches(() => ({ ...matches, matches: false}))
      }
      else {
        setMatches(() => ({ ...matches, matches: response}))
      }
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <div className = "dashboard">
    {
      redirectToLogin === true && (
        <Redirect to= '/login' />
      )
    }
    {
      redirectToLogin === false && (
        <div className = "dashboard-body">
        <MainNav />
        <SideNav />
          <div className="connections-div">
            <p className="dashboard-title"> Connections </p>
            <div className="connections-elem">
            {
              matches.matches === false && (
              <Tabs>
                <div label="Upcoming">
                  <NoMatches title="upcoming" />
                </div>
                <div label="Pending">
                  <NoMatches title="pending" />
                </div>
                <div label="Active">
                  <NoMatches title="active" />
                </div>
                <div label="Archived">
                  <NoMatches title="archived" />
                </div>
              </Tabs>
            )
            }
              <Search />
            </div>
          </div>
        </div>
      )
    }
    </div>
  )

}

export default Dashboard
