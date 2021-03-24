/* Matching for companies, should be the default page after login */
//import { withAuthenticator } from 'aws-amplify-react';
import LoginImg from "../images/loginimg.png"

import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'

const initialForm = {organizationEmail: '', password: '', authCode1: '', authCode2: '', authCode3: '',  authCode4: '', authCode5: '', authCode6: '', formType: 'signIn'}

function Login() {
  const [form, updateForm] = useState(initialForm)

  function onChange(e) {
    e.persist()
    updateForm(() => ({ ...form, [e.target.name]: e.target.value }))
  }

  async function signIn() {
      // we will add something here about if the user did not confirm their email, redirect them to a confirm email screen
      const username = form['organizationEmail']
      const password = form['password']
      try {
        await Auth.signIn(username, password)
        console.log("signed in user")
        updateForm(() => ({ ...form, formType: 'signedIn' }))
      }
      catch(err) {
        if(err.message === 'User is not confirmed.') {
          updateForm(() => ({ ...form, formType: 'confirmSignUp' }))
          await Auth.resendSignUp(form['organizationEmail'])
          return
        }
        else {
          console.log(err.message)
        }
      }

      //updateForm(() => ({ ...form, formType: 'signedIn' })) // dont think this is needed
    }

    async function confirmSignUp() {
      const username = form['organizationEmail']
      const authCode = form['authCode1'] + form['authCode2'] + form['authCode3'] + form['authCode4'] + form['authCode5'] + form['authCode6']
      await Auth.confirmSignUp(username, authCode)
      console.log("confirmed user")
      updateForm(() => ({ ...form, formType: 'signedIn' }))
      // NEED TO CATCH AN ERROR HERE
    }

    const { formType } = form

    return (
      <div className="landing-info">
      {
        formType === 'signIn' && (
          <div className="login-div">
            <img className="login-img" src={LoginImg} alt="login image"/>
            <h1 className="comp-heading1">Welcome Back</h1>
            <p className="login-subtitle">Ready to Start swiveling?</p>
            <input className = "login-box" type = "text" id = "username" name = 'organizationEmail' onChange = {onChange} type = "text" placeholder = "Email"/>
            <input className = "login-box" type = "text" id = "password" name = 'password' onChange = {onChange} type = "password" placeholder = "Password"/>
            <button className="login-btn" onClick = {() => signIn()}>Log In.</button>
            <Link className="forgot-pass" to="/resetpass">Forgot Password?</Link>
          </div>
        )
      }
      {
        formType === 'confirmSignUp' && (
          <div className="signup-form" id = "verify-form">
            <h1 className="comp-heading1"> Take a moment to verify. </h1>
            <p className="login-subtitle"> Verification Code. </p>
            <p className="para-body" id = "verify-para"> We have sent a 6 digit code to your email. </p>
            <div>
              <input className = "verification-box" name = 'authCode6' onChange = {onChange} type="text" inputmode = "numeric" maxlength="1"/>
              <input className = "verification-box" name = 'authCode5' onChange = {onChange} type="text" inputmode = "numeric" maxlength="1"/>
              <input className = "verification-box" name = 'authCode4' onChange = {onChange} type="text" inputmode = "numeric" maxlength="1"/>
              <input className = "verification-box" name = 'authCode3' onChange = {onChange} type="text" inputmode = "numeric" maxlength="1"/>
              <input className = "verification-box" name = 'authCode2' onChange = {onChange} type="text" inputmode = "numeric" maxlength="1"/>
              <input className = "verification-box" name = 'authCode1' onChange = {onChange} type="text" inputmode = "numeric" maxlength="1"/>
            </div>
            <button className="login-btn" id = "submit-btn" onClick = {() => confirmSignUp()}>Submit</button>
            <p className="para-body" id="resend-para"> It may take a minute to receive your code. <br></br> Didn't receive a code. <a><u>Resend Mail</u></a></p>
          </div>
        )
      }
      {
        formType === 'signedIn' && (
          <div>
            <h1 className="comp-heading1"> YOU ARE NOW SIGNED IN </h1>
            <p className="login-subtitle">Replace this section of the code with a redirect to the login dashboard. The current user is now in Auth.currentSession or Auth.currentUser</p>
          </div>
        )
      }

      </div>
  )
}

// THIS COMMENTED OUT CODE IS GOOD FOR IF WE NEED TO CHANGE THE HEADING AND UBTITLE OF THE LOGIN PAGE DEPENDNG ON WHERE THEY CAME FROM

// const Login = () => {
//   const heading = "Welcome Back"
//   const sub = "Ready to Start swiveling?"
//   return[
//     Section1(heading, sub),
//   ]
// }

// const Section1 = (heading, subtitle) => {
//   return(
//     <div className="landing-info">
//       <img className="login-img" src='../images/Logo_Full.png' alt="login image"/>
//       <h1 className="comp-heading1"> {heading} </h1>
//       <p className="login-subtitle"> {subtitle} </p>
//       <input className = "login-box" type = "text" id = "username" name = 'organizationEmail' onChange = {onChange} placeholder = "Email"/>
//       <input className = "login-box" type = "text" id = "password" name = 'password' onChange = {onChange} placeholder = "Password"/>
//       <button className="login-btn" onClick = {() => signIn()}>Log In.</button>
//       <Link className="forgot-pass" to="/resetpass">Forgot Password?</Link>
//     </div>
//   )
// }


export default Login
