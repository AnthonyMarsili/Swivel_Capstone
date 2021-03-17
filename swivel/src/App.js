<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
import TopNav from './components/TopNav'
import LoginNav from './components/LoginNav'
import SignUpNav from './components/SignUpNav'
import About from './components/About'
import Resources from './components/Resources'
import Landing from './components/Landing'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Footer from './components/Footer'

import {Route} from 'react-router-dom'

import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import ResetPass from './components/ResetPass'
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
>>>>>>> Stashed changes
}

export default App;
