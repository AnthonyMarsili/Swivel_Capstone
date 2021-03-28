import React, { useState, useEffect } from 'react'
import Amplify, { API, Auth, Hub } from 'aws-amplify'
import {Link, Redirect} from 'react-router-dom'

import MainNav from './MainNav'
import SideNav from './SideNav'

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
        <div>
          <div>
            <MainNav />
            <SideNav />
          </div>
          <div className = "dashboard-body">
            <div className="connections-div">
            </div>
          </div>
        </div>
      )
    }
    </div>
  )

}

export default Dashboard
