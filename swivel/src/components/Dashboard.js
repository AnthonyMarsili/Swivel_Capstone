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
    <div className = "landing-info">
    {
      redirectToLogin === true && (
        <Redirect to= '/login' />
      )
    }
    {
      redirectToLogin === false && (
        <div>
          <h1> Dashboard </h1>
        </div>
      )
    }
    </div>
  )
}

export default Dashboard
