import {Link, Redirect} from 'react-router-dom'
import React, { useState } from 'react'

const SetupProfile = ( ) => {
  const [redirectToDashboard, setRedirectToDashboard] = useState(false)

  function goToDashboard() {
    setRedirectToDashboard(true)
  }


  return (
    <div className = "dashboard-body">
    {
      redirectToDashboard === false && (
        <div>
          <button onClick = {() => goToDashboard()}>Skip Profile Setup</button>
        </div>
      )
    }
    {
      redirectToDashboard === true && (
        <Redirect to = '/dashboard' />
      )
    }
    </div>

  )
}

export default SetupProfile
