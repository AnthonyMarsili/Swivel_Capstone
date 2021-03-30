import MainNav from "./MainNav"
import SideNav from "./SideNav"
import Tabs from "./Tabs"
import Search from "./Search"
import NoMatches from "./NoMatches"
import DashboardMatch from "./DashboardMatch"

import React, { useState, useEffect } from 'react'
import Amplify, { API, Auth, Hub } from 'aws-amplify'
import {Link, Redirect} from 'react-router-dom'
import { listMatchs, getUser } from '../graphql/queries'

const matchList = {}

const Dashboard = ( ) => {
  const [redirectToLogin, setRedirectToLogin] = useState(false)
  const [matches, setMatches] = useState(matchList)
  // false = student, true = company
  const [userType, setUserType] = useState(true)

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
        // CHANGE BACK TO FALSE AFTER DOING MATCH THING
        setMatches(() => ({ ...matches, matches: false}))
      }
      else {
        setMatches(() => ({ ...matches, matches: matches}))
      }
    }).catch(err => {
      console.log(err);
    });
  }

  var upcoming = []
  var pending = []
  var active = []
  var archived = []

  if(matches.matches != false){
    for(var key in matches.matches){
      if(matches.matches[key].status_flag == "upcoming")
        upcoming.push(matches.matches[key])
      if(matches.matches[key].status_flag == "pending")
        upcoming.push(matches.matches[key])
      if(matches.matches[key].status_flag == "active")
        upcoming.push(matches.matches[key])
      if(matches.matches[key].status_flag == "archived")
        upcoming.push(matches.matches[key])
    }
  }


  // unsure how we're flagging student vs student
  async function getUserType(userID){
    await API.graphql({ query: getUser, variables: {id: userID.toString() }}).then(response => {
      var type = response.data.getUser.__typename;
      if(type == "Company" ){
        setUserType(true)
      }
      else {
        setUserType(false)
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
            <Tabs>
              <div label="Upcoming">
              {
                upcoming.length == 0 && (
                  <NoMatches title="upcoming" />
                )
              }
              {
                upcoming.length != 0 && (
                    // loop through all upcoming matches and display upcoming component
                    // photo here ? not sure if you can pass that :/
                    <DashboardMatch userType={userType} matchType="upcoming" name="Name Holder" school="School Holder" degree="Degree Holder" major="Major Holder" meeting="{matches.matches.upcoming_meeting}" />
                )
              }
              </div>
              <div label="Pending">
              {
                pending.length == 0 && (
                  <NoMatches title="pending" />
                )
              }
              {
                pending.length != 0 && (
                    // loop through all upcoming matches and display upcoming component
                    // photo here ? not sure if you can pass that :/
                    <DashboardMatch userType={userType} matchType="upcoming" name="Name Holder" school="School Holder" degree="Degree Holder" major="Major Holder" meeting="{matches.matches.upcoming_meeting}" />
                )
              }
              </div>
              <div label="Active">
              {
                active.length == 0 && (
                  <NoMatches title="active" />
                )
              }
              {
                active.length != 0 && (
                    // loop through all upcoming matches and display upcoming component
                    // photo here ? not sure if you can pass that :/
                    <DashboardMatch userType={userType} matchType="upcoming" name="Name Holder" school="School Holder" degree="Degree Holder" major="Major Holder" meeting="{matches.matches.upcoming_meeting}" />
                )
              }
              </div>
              <div label="Archived">
              {
                archived.length == 0 && (
                  <NoMatches title="archived" />
                )
              }
              {
                archived.length != 0 && (
                    // loop through all upcoming matches and display upcoming component
                    // photo here ? not sure if you can pass that :/
                    <DashboardMatch userType={userType} matchType="upcoming" name="Name Holder" school="School Holder" degree="Degree Holder" major="Major Holder" meeting="{matches.matches.upcoming_meeting}" />
                )
              }
              </div>
              </Tabs>
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
