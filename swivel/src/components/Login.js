/* Matching for companies, should be the default page after login */
//import { withAuthenticator } from 'aws-amplify-react';
import {Link} from 'react-router-dom'

const Login = () => {
  const heading = "Welcome Back"
  const sub = "Ready to Start swiveling?"
  return[
    Section1(heading, sub),
  ]
}

const Section1 = (heading, subtitle) => {
  return(
    <div className="landing-info">
      <img className="login-img" src='../images/Logo_Full.png' alt="login image"/>
      <h1 className="comp-heading1"> {heading} </h1>
      <p className="login-subtitle"> {subtitle} </p>
      <input className = "login-box" type = "text" id = "username" placeholder = "Email"/>
      <input className = "login-box" type = "text" id = "password" placeholder = "Password"/>
      <Link className="login-btn" to="/login">Log In.</Link>
      <Link className="forgot-pass" to="/resetpass">Forgot Password?</Link>
    </div>
  )
}

export default Login