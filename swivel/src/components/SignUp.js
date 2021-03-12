/* Sign up page */
import {NavLink, Link} from 'react-router-dom'
import logo_full from '../images/Logo_Full.png'

const SignUp = ( ) => {
  return(
    <div className="landing-info" id="section4">
      <h1 className="section-header" id="signup-heading"> Why are you here Today? </h1>

      <Link to = "/">
      <div className="review" id="rev-div-1">
        <img className="signup-img" id="student-signup-img" src= "../images/signup/sign-up-company.png" alt="student_logo" />
        <h4 className="signup-head">I am a student.</h4>
        <p className="signup-content"> CONTENT </p>
      </div>
      </Link>

      <Link to = "/">
      <div className="review" id="rev-div-2">
        <img className="signup-img" id="company-signup-img" src= "../images/signup/sign-up-company.png" alt="company_logo" />
        <h4 className="signup-head">I am a company.</h4>
        <p className="sign-content"> CONTENT </p>
      </div>
      </Link>
    </div>
  )
}
  
export default SignUp