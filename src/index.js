import './index.css';
import 'font-awesome/css/font-awesome.css';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store'
import client from './utils/apolloClient';
import { ApolloProvider } from 'react-apollo';
import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './routes';

// Some material-ui components use react-tap-event-plugin to listen for touch
// events because onClick is not fast enough This dependency is temporary and
// will eventually go away.
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

moment.locale('he');

ReactDOM.render(
  <ApolloProvider client={client} store={store}>
    <MuiThemeProvider>
      <Routes />
    </ MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
