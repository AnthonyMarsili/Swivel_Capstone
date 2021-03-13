/* Sign up page */
import {NavLink, Link} from 'react-router-dom'
import logo_full from '../images/Logo_Full.png'

const SignUp = ( ) => {
  return(
    <div className="landing-info" id="signup-div">
      <h1 className="section-header" id="signup-heading"> Why are you here today? </h1>

      <Link onClick = {studentSignUp}>
        <div className="signup-btn" id="student-box">
          <img className="signup-img" id="student-signup-img" src= "../images/signup/sign-up-company.png" alt="student_logo" />
          <h4 className="signup-head">I am a student.</h4>
          <p className="signup-content"> CONTENT </p>
        </div>
      </Link>

      <Link onClick={companySignUp}>
        <div className="signup-btn" id="company-box">
          <img className="signup-img" id="company-signup-img" src= "../images/signup/sign-up-company.png" alt="company_logo" />
          <h4 className="signup-head">I am a company.</h4>
          <p className="sign-content"> CONTENT </p>
        </div>
      </Link>

      <div className="signup-form" id = "signup-form">
        <h1 className="comp-heading1"> Let's build your dream team. </h1>
        <p className="login-subtitle"> Create a company account in just a few steps. </p>
        <input className = "login-box" type = "text" id = "firstname" placeholder = "First Name"/>
        <input className = "login-box" type = "text" id = "lastname" placeholder = "Last Name"/>
        <input className = "login-box" type = "text" id = "company" placeholder = "Company"/>
        <input className = "login-box" type = "text" id = "email" placeholder = "Company Email"/>
        <input className = "login-box" type = "password" id = "newpass" placeholder = "Password"/>
        <input className = "login-box" type = "password" id = "confirmpass" placeholder = "Confirm Password"/>
        <Link className="login-btn" id = "join-btn"  onClick={verification}>Join now.</Link>
        <Link className="login-btn" id = "linkedin" to="/">Sign up with Linkedin.</Link>
      </div>

      <div className="signup-form" id = "verify-form">
        <h1 className="comp-heading1"> Take a moment to verify. </h1>
        <p className="login-subtitle"> Verification Code. </p>
        <p className="para-body" id = "verify-para"> We have sent a 4 digit code to your email. </p>
        <input className = "verification-box" type="text" maxlength="1"/>
        <input className = "verification-box" type="text" maxlength="1"/>
        <input className = "verification-box" type="text" maxlength="1"/>
        <input className = "verification-box" type="text" maxlength="1"/>
        <Link className="login-btn" id = "submit-btn" to = "/login">Submit</Link>
        <p className="para-body" id="resend-para"> It may take a minute to receive your code. <br></br> Didn't receive a code. <a><u>Resend Mail</u></a></p>
      </div>
    </div>
  )
}

function studentSignUp(){
    return (
      document.getElementById("student-box").style.display = "none",
      document.getElementById("company-box").style.display = "none",
      document.getElementById("signup-heading").style.display = "none",
      document.getElementById("company").placeholder = "University",
      document.getElementById("email").placeholder = "Student Email",
      document.getElementById("signup-form").style.display = "inline-block"
    );
}

function companySignUp(){
    return (
      document.getElementById("student-box").style.display = "none",
      document.getElementById("company-box").style.display = "none",
      document.getElementById("signup-heading").style.display = "none",
      document.getElementById("signup-form").style.display = "inline-block"
    );
}

function verification(){
    return(
      document.getElementById("signup-form").style.display = "none",
      document.getElementById("verify-form").style.display = "inline-block"
    )
}

export default SignUp