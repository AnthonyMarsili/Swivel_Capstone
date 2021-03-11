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
      <img className="landing-img1" src="../images/company/computer_outline.png" alt="heading_image"/>
      <h1 className="comp-heading1"> {heading} </h1>
    </div>
  )
}

export default Login