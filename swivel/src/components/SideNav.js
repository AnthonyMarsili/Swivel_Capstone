import MatchIcon from "../images/matchingIcon.png"
import ProfileIcon from "../images/profileIcon.png"
import DashIcon from "../images/dashboardIcon.png"
import CalIcon from "../images/calIcon.png"

import {NavLink} from 'react-router-dom'
import { Auth, Hub } from 'aws-amplify'

const SideNav = () => {
  return (
    // if user is a student id = stud-side else id comp-nav
    <div className="side-nav" id="comp-nav">
      <NavLink activeStyle={{ backgroundColor: "#A5DAD5" }} exact to="/matching" className="side-nav-btn" id="comp-nav-btn"><img className="side-nav-icon" src={MatchIcon} alt="matchIcon"/> <p className="side-nav-label">Start Matching</p></NavLink>
      <NavLink activeStyle={{ backgroundColor: "#A5DAD5" }} exact to="/profile" className="side-nav-btn" id="comp-nav-btn"><img className="side-nav-icon" src={ProfileIcon} alt="profileIcon"/> <p className="side-nav-label">Profile</p></NavLink>
      <NavLink activeStyle={{ backgroundColor: "#A5DAD5" }} exact to="/dashboard" className="side-nav-btn" id="comp-nav-btn"><img className="side-nav-icon" src={DashIcon} alt="dashIcon"/> <p className="side-nav-label">Connections</p></NavLink>
      <NavLink activeStyle={{ backgroundColor: "#A5DAD5" }} exact to="/calendar" className="side-nav-btn" id="comp-nav-btn"><img className="side-nav-icon" src={CalIcon} alt="calIcon"/> <p className="side-nav-label">Calendar</p></NavLink>
    </div>
  )
}

export default SideNav
