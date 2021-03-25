import LogoFull from "../images/Logo_Full.png"
import DropImg from "../images/dropdown.png"

import {NavLink} from 'react-router-dom'
import { Auth, Hub } from 'aws-amplify'

const SideNav = () => {

  async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }

  return (
    // if user is a student id = stud-side else id comp-nav
    <div className="main-nav">
      <img className="nav-logo" id="main-nav-logo" src={LogoFull} alt="Swivel_Logo" />
      <div className="nav-dropdown">
        <img className="profile-pic" src="" alt="profile-pic" />
        <p className="profile-name"> Placeholder Name <img className="nav-drop-img" src={DropImg} alt="drop"/> </p>
        <div className="nav-dropdown-content">
          <p className="dropdown-opt"> <b> Status: </b> Online </p>
          <NavLink exact to="/profile" className="dropdown-opt"><p className="dropdown-opt">Account Settings</p></NavLink>
          <NavLink exact to="https://forms.gle/Q1xkfrAP1bjLXDfW9" className="dropdown-opt"><p className="dropdown-opt">Feedback</p></NavLink>
          <button className="dropdown-opt" onClick = {() => signOut()}>Log Out</button>
        </div>
      </div>
    </div>
  )
}

export default SideNav
