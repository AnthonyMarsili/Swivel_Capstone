import MainNav from "./MainNav"
import SideNav from "./SideNav"
import Tabs from "./Tabs"
import Search from "./Search"

import React, { useState, useEffect } from 'react'
import Amplify, { API, Auth, Hub } from 'aws-amplify'
import {Link, Redirect} from 'react-router-dom'

const Dashboard = ( ) => {
    const [redirectToLogin, setRedirectToLogin] = useState(false)

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(() => { return true; })
      .catch(() => { setRedirectToLogin(true) })
  })

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
                  <div className="tab-content"><p> Upcoming </p></div>
                </div>
                <div label="Pending">
                  <div className="tab-content"><p> Pending </p></div>
                </div>
                <div label="Active">
                  <div className="tab-content"><p> Active </p></div>
                </div>
                <div label="Archived">
                  <div className="tab-content"><p> Archived </p></div>
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
