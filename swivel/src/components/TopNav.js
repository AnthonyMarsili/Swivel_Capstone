import {NavLink} from 'react-router-dom'
import logo_full from '../images/Logo_Full.png'

function TopNav(){
  const userType = window.location.pathname;
  if (userType === "/login"){
    return(
      <div className='landing-nav'>
        <NavLink exact to="/" className="nav-btn-logo"><img className="nav-logo" src={logo_full} alt="Swivel_Logo" /></NavLink>
        <p activeStyle={{ fontWeight: "bold" }} className="nav-btn">Doesn't have an account.</p>
        <NavLink activeStyle={{ fontWeight: "bold" }} exact to="/SignUp" className="nav-btn" id="sign-up"><u>Join here.</u></NavLink>
      </div>
    );
  } else {
    return(
      <div className='landing-nav'>
        <NavLink exact to="/" className="nav-btn-logo"><img className="nav-logo" src={logo_full} alt="Swivel_Logo" /></NavLink>
        <NavLink activeStyle={{ fontWeight: "bold" }} exact to="/login" className="nav-btn" id="nav-login">Login</NavLink>
        <NavLink activeStyle={{ fontWeight: "bold" }} exact to="/about" className="nav-btn">About Us</NavLink>
        <NavLink activeStyle={{ fontWeight: "bold" }} exact to="/resources" className="nav-btn">Resources</NavLink>
        <NavLink activeStyle={{ fontWeight: "bold" }} exact to="/" className="nav-btn">Startups</NavLink>
        <NavLink activeStyle={{ fontWeight: "bold" }} exact to="/students" className="nav-btn">Students</NavLink>
      </div>
    );
  }
}

export default TopNav;
