import MainNav from './MainNav'
import SideNav from './SideNav'
import ScheduleSelector from 'react-schedule-selector'
import React, { useState, useEffect } from 'react'
import Amplify, { API, Auth, Hub } from 'aws-amplify'
import {Link, Redirect} from 'react-router-dom'
import {getUser } from '../graphql/queries'
import {updateUser } from '../graphql/mutations'

const CalendarComponent = ( ) => {
  const [availabilities, setAvailabilities] = useState([])
  const [meetings, setMeetings] = useState([])
  const [redirectToLogin, setRedirectToLogin] = useState(false)
  const [viewType, setViewType] = useState('availabilities')
  const [userID, setUserID] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [firstRun, setFirstRun] = useState(true)
  /*
  This is the component for the "calendar" on the side nav
   it should allow them to
    - connect their Google calendar and show their availabilities on a calendar view
              - (shouldn't be that hard look at the documentation for freebusy method)
    - paint over times they are available
    - display any meetings they're going to have

  The calendar is where you populate the "availabilities" field in the user.
   */
  useEffect(() => {
   let isCancelled = false
   console.log("hola")
   Auth.currentSession()
     .then(currUser => {
       var userID = currUser['idToken']['payload']['sub']
       setUserID(userID)
       checkIfChanges(userID)
       if(firstRun === true) {
         grabAvailabilities(userID)
       }
       return () => {
         isCancelled = true
       }
      })
     .catch(err => {
       setRedirectToLogin(true)
     })
  })

  // useEffect(() => {
  //  API.graphql({ query: getUser, variables: {id: userID }}).then(response => {
  //    if(response.data.getUser.availability) {
  //     setAvailabilities(response.data.getUser.availability)
  //   }
  //  })
  // }, []) // this should only run once

  function grabAvailabilities(userID) {
    API.graphql({ query: getUser, variables: {id: userID }}).then(response => {
      if(response.data.getUser.availability) {
       setAvailabilities(response.data.getUser.availability)
     }
    })
    setFirstRun(false)
  }

  function onCalDateChange(selectedSlots) {
    setAvailabilities(selectedSlots)
  }

  function switchView() {
   if(viewType === 'availabilities') {
     setViewType('meetings')
   }
   else {
     setViewType('availabilities')
   }
  }

  async function submitAvailabilities() {
    await API.graphql({ query: updateUser, variables: {input: {id: userID, availability: availabilities }}}).then(response => {
     console.log('updated user availabilities')
    })
    window.location.reload()
  }

  function checkIfChanges() {
    API.graphql({ query: getUser, variables: {id: userID.toString() }}).then(response => {
      if(response.data.getUser.availability) {
        if(availabilities.sort().toString() === response.data.getUser.availability.sort().toString()) { // a hacky way of checking if they are equal
          setBtnDisabled(true)
        }
        else {
          setBtnDisabled(false)
        }
      }
    })
  }

  return (
    <div>
    {
      redirectToLogin === true && (
        <Redirect to= '/login' />
      )
    }
    {
      redirectToLogin === false && viewType === 'availabilities' && (
        <div>
          <MainNav />
          <SideNav />
          <div id = 'calendarOnScreen'>
            <h2>Select Availabilities</h2>
            <ScheduleSelector
              selection = {availabilities}
              onChange = {onCalDateChange}
              numDays = {14}
              minTime = {9}
              maxTime = {17}
              hourlyChunks = {2}
              timeFormat = 'h:mm'
            />
          </div>
          <div id = 'sectionBesideCal'>
            <button className = "buttonBesideCal" onClick = {() => switchView()}>See Scheduled Meetings</button>
            <button
              className = "buttonBesideCal"
              disabled = {btnDisabled}
              onClick = {() => submitAvailabilities()}>
              Submit Availabilities
            </button>
          </div>
        </div>
      )
    }
    {
      redirectToLogin === false && viewType === 'meetings' && (
        <div>
          <MainNav />
          <SideNav />
          <div id = 'calendarOnScreen'>
            <h2>Select Availabilities</h2>
            <ScheduleSelector
              selection = {meetings}
              numDays = {14}
              minTime = {9}
              maxTime = {17}
              hourlyChunks = {2}
              timeFormat = 'h:mm'
            />
          </div>
          <div id = 'sectionBesideCal'>
            <button className = "buttonBesideCal" onClick = {() => switchView()}>See/Set Availabilities</button>
          </div>
        </div>
      )
    }
    </div>
  )
}

export default CalendarComponent
