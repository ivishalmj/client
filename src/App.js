/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Lookup from './Pages/lookup';
import Fleet from './Pages/fleet';
import AddPolicyData from './Pages/addPolicyData';
import EditPolicyData from './Pages/editPolicyData';
import ViewPolicy from './Pages/viewPolicy';
import Login from './Pages/login';
import Signup from './Pages/signup';
import Profile from './Pages/profile';
import Underwriting from './Pages/underwriting';
import Dashboard from './Pages/dashboard';
import AppNotifications from './Components/AppNotifications';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';

function App() {
  const adminLoginToken = useSelector((state) => state.user.adminLoginToken);

  if (adminLoginToken) {
    return <AuthenticatedApp />;
  }

  return <UnauthenticatedApp />;
}

function UnauthenticatedApp() {
  return (
    <Router>
      <AppNotifications />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/logout" render={() => <Redirect to="/" />} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

function AuthenticatedApp() {
  return (
    <Router>
      <Switch>
        <Route exact path="/lookup" component={Lookup} />
        <Route exact path="/logout" render={() => <Redirect to="/" />} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/fleets/:id" component={Fleet} />
        <Route exact path="/policies/:id/view" component={ViewPolicy} />
        <Route exact path="/add-details" component={AddPolicyData} />
        <Route exact path="/policies/:id/edit" component={EditPolicyData} />
        <Route exact path="/underwriting" component={Underwriting} />
        <Redirect to="/dashboard" />
      </Switch>
    </Router>
  );
}

export default App;
