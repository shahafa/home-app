import React from 'react';
import { Router, Route, browserHistory, Redirect } from 'react-router';
import AuthService from './utils/AuthService';
import App from './components/App';
import LoginPage from './components/LoginPage';
import LoginCallbackPage from './components/LoginCallbackPage';

const auth = new AuthService('xRHTKjKOShlzj2HcfK88XOfFgAo5ojgl', 'shahaf.auth0.com');

const requireAuth = (nextState, replace) => {
  if (!AuthService.loggedIn()) {
    replace({ pathname: '/login' });
  }
};

export const routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={requireAuth} />
    <Route path="/login" component={LoginPage} auth={auth} />
    <Route path="/loginCallback" component={LoginCallbackPage} />
    <Redirect from="*" to="/" />
  </Router>
);

export default routes;
