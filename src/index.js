import './index.css';
import 'font-awesome/css/font-awesome.css';
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';

const client = new ApolloClient();

// Some material-ui components use react-tap-event-plugin to listen for touch
// events because onClick is not fast enough This dependency is temporary and
// will eventually go away.
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

moment.locale('he');

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider>
      <App />
    </ MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
