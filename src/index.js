import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store/store';
import Routes from './routes';
import './index.css';

// Some material-ui components use react-tap-event-plugin to listen for touch
// events because onClick is not fast enough This dependency is temporary and
// will eventually go away.
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

moment.locale('he');

const muiTheme = getMuiTheme({
  checkbox: {
    boxColor: '#757575',
    checkedColor: '#4688F1',
  },
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Routes />
    </ MuiThemeProvider>
  </Provider>,
  document.getElementById('root'));
