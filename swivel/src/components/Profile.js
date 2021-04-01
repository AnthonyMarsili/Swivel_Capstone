import MainNav from './MainNav'
import SideNav from './SideNav'
import { Auth, API } from "aws-amplify";
import React, { useState, useEffect } from 'react'
import {getUser } from '../graphql/queries'
import { updateUser } from '../graphql/mutations';



const Profile = ( ) => {
  const [editing, setEdit] = useState(false)
  const [userID, setUserID] = useState('')
  const [firstRun, setFirstRun] = useState(true)
  const [userFirstName, setFirstName] = useState('')
  const [userLastName, setLastName] = useState('')
  const [userEmail, setEmail] = useState('')
  const [userBio, setBio] = useState('') // unsure because one for student and about for company
  const [userAbout, setAbout] = useState('')
  const [userType, setUserType] = useState(false)
  
  
  useEffect(() => {
    console.log("hola")
    Auth.currentSession()
      .then(currUser => {
        var userID = currUser['idToken']['payload']['sub']
        setUserID(userID)
        if(firstRun === true) {
          grabAttributes(userID)
        }
       })
   })


  function onChange(e) {
    e.persist()
    if (e.target.name === 'firstName'){ 
      setFirstName(e.target.value)
    }
    if (e.target.name === 'lastName'){ 
      setLastName(e.target.value)
    }
    if (e.target.name === 'email'){ 
      setEmail(e.target.value)
    }
    if (userType === false) {//false for student
      if (e.target.name === 'bio'){ 
        setBio(e.target.value)
      }
    }
    else {
      if (e.target.name === 'about'){ 
        setAbout(e.target.value)
      }
    }

  }

  function grabAttributes(userID){
    API.graphql({ query: getUser, variables: {id: userID }}).then(response => {
      if(response.data.getUser.firstName) {
       setFirstName(response.data.getUser.firstName)
      }
      if(response.data.getUser.lastName) {
        setLastName(response.data.getUser.lastName)
       }
       if(response.data.getUser.email) {
        setEmail(response.data.getUser.email)
       }
       if(response.data.getUser.about) {
        setAbout(response.data.getUser.about)
       }
       if(response.data.getUser.bio) {
        setBio(response.data.getUser.bio)
       }
       if(response.data.getUser.typeOfUser){
         setUserType(response.data.getUser.typeOfUser)
       }
    })
    setFirstRun(false)
  }

  async function submitAttributes() {
    await API.graphql({ query: updateUser, variables: {input: {id: userID, firstName: userFirstName, lastName: userLastName, email: userEmail, bio: userBio, about: userAbout }}}).then(response => {
     console.log('updated user profile')
    })
    window.location.reload()
    setEdit(false)
  }

async function editAttributes(){
  setEdit(true)
}
async function cancel(){
  setEdit(false)
}


  return (
    <div>
      <MainNav />
      <SideNav />
      <div className="user-profile">
      {
        editing === false && (
          <div className="profileCurrent-div">
            <h1 className="comp-heading1">Your Profile</h1>
            <p>some info displayed from the variables userXXX </p> 
            <p>some more info</p>
            <p>EVEN MORE INFO</p>
            <button className="edit-btn" id = "submit-btn" onClick = {() => editAttributes()}>Edit Profile</button>
          </div>
        )
      }
      {
        editing === true && (
          <div className="profileEdit-div">
            <h1 className="comp-heading1" id="verify-heading"> Edit Your Profile. </h1>
            <div className="edit-profile">
              <p innerHTML = {userFirstName}></p>
              <input className = "firstName-box" name = 'firstName' onChange = {onChange} type="text"/>
              <p>Last Name</p>
              <input className = "lastName-box" name = "lastName" onChange = {onChange} type = "text"/>
              <p>Email</p>
              <input className = "email-box" name = 'email' onChange = {onChange} type="text"/>
              <p>Bio</p>
              <input className = "bio-box" name = "bio" onChange = {onChange} type = "text"/>
              <p>About</p>
              <input className = "about-box" name = 'about' onChange = {onChange} type="text"/>
              <button className="verifysave-btn" id = "submit-btn" onClick = {() => submitAttributes()}>Save Changes</button>
            </div>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Profile
