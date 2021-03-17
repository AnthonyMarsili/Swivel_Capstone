/* Sign up page */
import {NavLink, Link, Redirect, Prompt} from 'react-router-dom' // not using Prompt rn
import logo_full from '../images/Logo_Full.png'
import React, { useState, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'

const initialForm = {firstName: '', lastName: '', organization: '', organizationEmail: '', password: '', confirmPassword: '', authCode1: '', authCode2: '', authCode3: '', authCode4: '', authCode5: '', authCode6: '', agree: true, formType: 'signUp'}

function SignUp() {
  const [form, updateForm] = useState(initialForm)
  const [selection, updateSelection] = useState('')

  function onChange(e) {
    e.persist()
    updateForm(() => ({ ...form, [e.target.name]: e.target.value }))
  }

  function studentOnClick(e) {
    updateSelection('student')
  }

  function companyOnClick(e) {
    updateSelection('company')
  }

  function backToSelection(e) {
    updateSelection('')
  }

  async function signUp() {
    const username = form['organizationEmail']
    const password = form['password']
    const firstName = form['firstName']
    const lastName = form['lastName']
    const organization = form['organization']
    var student = '0'
    if(selection === 'student') {
      student = '1'
    }
    if(password !== form['confirmPassword']) {
      alert("Passwords do not match")
    }
    else {
      await Auth.signUp({ username, password, attributes: { 'custom:firstName': firstName, 'custom:lastName': lastName, 'custom:organization': organization, 'custom:student': student }})
      console.log("signed up user")
      updateForm(() => ({ ...form, formType: 'confirmSignUp' }))
    }
  }

  async function confirmSignUp() {
    const username = form['organizationEmail']
    const authCode = form['authCode1'] + form['authCode2'] + form['authCode3'] + form['authCode4'] + form['authCode5'] + form['authCode6']
    console.log(authCode)
    await Auth.confirmSignUp(username, authCode)
    console.log("confirmed user")
    updateForm(() => ({ ...form, formType: 'signIn' }))
  }

  function showUser() {
    var test = Auth.currentSession()
    console.log(test)
  }

  const { formType } = form


  // each of the "if's" below can be its own component technically. because there will be times throughout the website flow where we will need, for example...
  // the sign up or confirm password components

  return (
    <div className="landing-info" id="signup-div">
      {
        selection === '' && formType !== 'signIn' && formType !== 'confirmSignUp' && formType !== 'signedIn' && (
          <div>
            <h1 className="section-header" id="signup-heading"> Why are you here today? </h1>
            <Link onClick = {() => studentOnClick()}>
              <div className="signup-btn" id="student-box">
                <img className="signup-img" id="student-signup-img" src= "../images/signup/sign-up-company.png" alt="student_logo" />
                <h4 className="signup-head">I am a student.</h4>
                <p className="signup-content"> CONTENT </p>
              </div>
            </Link>
            <Link onClick = {() => companyOnClick()}>
              <div className="signup-btn" id="company-box">
                <img className="signup-img" id="company-signup-img" src= "../images/signup/sign-up-company.png" alt="company_logo" />
                <h4 className="signup-head">I am a company.</h4>
                <p className="sign-content"> CONTENT </p>
              </div>
            </Link>
          </div>
        )
      }
      {
        selection === 'student' && formType === 'signUp' && (
          <div className="signup-form" id = "signup-form">
            <h1 className="comp-heading1"> Let's build your dream team. </h1>
            <p className="login-subtitle"> Create a company account in just a few steps. </p>
            <input className = "login-box" type = "text" name = 'firstName' id = "firstname" onChange = {onChange} placeholder = "First Name"/>
            <input className = "login-box" type = "text" name = 'lastName' id = "lastname" onChange = {onChange} placeholder = "Last Name"/>
            <input className = "login-box" type = "text" name = 'organization' id = "company" onChange = {onChange} placeholder = "School"/>
            <input className = "login-box" type = "text" name = 'organizationEmail' id = "email" onChange = {onChange} placeholder = "School Email"/>
            <input className = "login-box" type = "password" name = 'password' id = "newpass" onChange = {onChange} placeholder = "Password"/>
            <input className = "login-box" type = "password" name = 'confirmPassword' id = "confirmpass" onChange = {onChange} placeholder = "Confirm Password"/>
            <button className = "login-btn" onClick = {() => backToSelection()}>Back</button>
            <button className="login-btn" id = "join-btn"  onClick = {() => signUp()}>Join now.</button>
            <button className="login-btn" id = "linkedin" to="/">Sign up with Linkedin.</button>
          </div>
        )
      }
      {
        selection === 'company' && formType === 'signUp' && (
          <div className="signup-form" id = "signup-form">
            <h1 className="comp-heading1"> Let's build your dream team. </h1>
            <p className="login-subtitle"> Create a company account in just a few steps. </p>
            <input className = "login-box" type = "text" name = 'firstName' id = "firstname" onChange = {onChange} placeholder = "First Name"/>
            <input className = "login-box" type = "text" name = 'lastName' id = "lastname" onChange = {onChange} placeholder = "Last Name"/>
            <input className = "login-box" type = "text" name = 'organization' id = "company" onChange = {onChange} placeholder = "Company"/>
            <input className = "login-box" type = "text" name = 'organizationEmail' id = "email" onChange = {onChange} placeholder = "Company Email"/>
            <input className = "login-box" type = "password" name = 'password' id = "newpass" onChange = {onChange} placeholder = "Password"/>
            <input className = "login-box" type = "password" name = 'confirmPassword' id = "confirmpass" onChange = {onChange} placeholder = "Confirm Password"/>
            <button className = "login-btn" onClick = {() => backToSelection()}>Back</button>
            <button className="login-btn" id = "join-btn"  onClick = {() => signUp()}>Join now.</button>
            <button className="login-btn" id = "linkedin" to="/">Sign up with Linkedin.</button>
          </div>
        )
      }
      {
        formType === 'confirmSignUp' && (
          <div className="signup-form" id = "verify-form">
            <h1 className="comp-heading1"> Take a moment to verify. </h1>
            <p className="login-subtitle"> Verification Code. </p>
            <p className="para-body" id = "verify-para"> We have sent a 6 digit code to your email. </p>
            <input className = "verification-box" name = 'authCode6' onChange = {onChange} type="text" maxlength="1"/>
            <input className = "verification-box" name = 'authCode5' onChange = {onChange} type="text" maxlength="1"/>
            <input className = "verification-box" name = 'authCode4' onChange = {onChange} type="text" maxlength="1"/>
            <input className = "verification-box" name = 'authCode3' onChange = {onChange} type="text" maxlength="1"/>
            <input className = "verification-box" name = 'authCode2' onChange = {onChange} type="text" maxlength="1"/>
            <input className = "verification-box" name = 'authCode1' onChange = {onChange} type="text" maxlength="1"/>
            <button className="login-btn" id = "submit-btn" onClick = {() => confirmSignUp()}>Submit</button>
            <p className="para-body" id="resend-para"> It may take a minute to receive your code. <br></br> Didn't receive a code. <a><u>Resend Mail</u></a></p>
          </div>
        )
      }
      {
        formType === 'signIn' && (
          <Redirect to= '/login' />
        )
      }
    </div>
  )
}

export default SignUp
