import React from 'react';
import SignInSide from './components/SignInSide';
import Nav from './components/Nav';
import About from './components/About';
import ForgotPassword from './components/ForgotPassword';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/signIn" component={SignInSide} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <SignInSide />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
