import TopNav from './components/TopNav'
import About from './components/About'
import Resources from './components/Resources'
import LandingStudent from './components/LandingStudent'
import LandingCompany from './components/LandingCompany'
import Login from './components/Login'

import {Route} from 'react-router-dom'

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="container">
      <TopNav />
      <Route exact path="/" component={LandingCompany} />
      <Route exact path="/students" component={LandingStudent} />
      <Route exact path="/about" component={About} />
      <Route exact path="/resources" component={Resources} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
