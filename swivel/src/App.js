import TopNav from './components/TopNav'
import LoginNav from './components/LoginNav'
import SignUpNav from './components/SignUpNav'
import About from './components/About'
import Resources from './components/Resources'
import Landing from './components/Landing'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Footer from './components/Footer'
import ResetPass from './components/ResetPass'

import MainNav from './components/MainNav'
import SideNav from './components/SideNav'
import Matching from './components/Matching'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Calendar from './components/Calendar'

import {Route} from 'react-router-dom'

import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
Amplify.configure(awsconfig)

function App() {
    return (
      <div className="container">
        <TopNav />
        <Route exact path="/" component={Landing} />
        <Route exact path="/students" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/login" component={Login} />
        <Route exact path='/login' component = {LoginNav} />
        <Route exact path = '/signup' component = {SignUp} />
        <Route exact path = '/signup' component = {SignUpNav} />
        <Route exact path = '/resetpass' component = {ResetPass} />
        <Footer />
      </div>
    )
    /*return(
      <div className="container">
        <MainNav />
        <SideNav />
        <Route exact path="/" component={Matching} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/calendar" component={Calendar} />
      </div>
    )*/
}

export default App
