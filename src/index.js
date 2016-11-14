import './index.css';
import 'font-awesome/css/font-awesome.css';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import client from './helpers/apolloClient';
import { ApolloProvider } from 'react-apollo';
import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';

const store = configureStore({});

// Some material-ui components use react-tap-event-plugin to listen for touch
// events because onClick is not fast enough This dependency is temporary and
// will eventually go away.
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

moment.locale('he');

ReactDOM.render(
  <ApolloProvider client={client} store={store}>
    <MuiThemeProvider>
      <App />
    </ MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
