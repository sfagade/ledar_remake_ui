import React from 'react';
import {Switch, Route} from 'react-router-dom';

import App from './App';
import About from './components/About';
import ForgotPassword from './components/ForgotPassword';
import OccupationDetails from './components/OccupationDetails';
import SignInSide from './components/SignInSide';

export default (
    <Switch>
        <Route path="/" component={App}>
        <Route path="/about" component={About} />
            <Route path="/signIn" component={SignInSide} />
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/occupationDetails/:id" component={OccupationDetails} />
        </Route>
    </Switch>
  )