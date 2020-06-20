import React from 'react';

import SignInSide from './components/SignInSide';
import Nav from './components/Nav';
import About from './components/About';
import ForgotPassword from './components/ForgotPassword';
import OccupationDetails from './components/OccupationDetails';
import Dashboard from './components/secured/Dashbaord';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/signIn" component={SignInSide} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/occupationDetails/:id" component={OccupationDetails} />
          <Route path="/dashboard" component={Dashboard} />
          <SignInSide />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
