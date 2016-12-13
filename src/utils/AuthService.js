import Auth0Lock from 'auth0-lock';
import { browserHistory } from 'react-router';
import { isTokenExpired } from './jwtHelper';
import LogoImg from '../static/home.svg';

export default class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {
      container: 'hiw-login-container',
      closable: false,
      auth: {
        // redirectUrl: 'http://ec2-35-156-102-89.eu-central-1.compute.amazonaws.com/loginCallback',
        redirectUrl: 'http://localhost:3000/loginCallback',
        responseType: 'token',
        params: { scope: 'openid name email' },
      },
      theme: {
        logo: LogoImg,
      },
      languageDictionary: {
        title: 'Home',
      },
    });

    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', AuthService.doAuthentication);

    // Add callback for lock `authorization_error` event
    this.lock.on('authorization_error', AuthService.authorizationError);

    // binds login functions to keep this context
    this.login = this.login.bind(this);
  }

  static authorizationError() {
    // on error navigate back to login screen
    browserHistory.replace('/login');
  }

  static doAuthentication(authResult) {
    // Saves the user token
    AuthService.setToken(authResult.idToken);

    // navigate to the home route
    browserHistory.replace('/');
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  static loggedIn() {
    const token = AuthService.getToken();
    const loggedIn = !!token && !isTokenExpired(token);

    return loggedIn;
  }

  static setToken(idToken) {
    // Saves user token to local storage
    localStorage.setItem('id_token', idToken);
  }

  static getToken() {
    // Retrieves the user token from local storage
    return localStorage.getItem('id_token');
  }

  static logout() {
    // Clear user token from local storage
    localStorage.removeItem('id_token');

    browserHistory.replace('/login');
  }
}
