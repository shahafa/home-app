import './App.css';
import 'font-awesome/css/font-awesome.css';
import React, { Component } from 'react';
import DevTools from '../containers/DevTools';
import FontAwesome from 'react-fontawesome';
import AppBar from 'material-ui/AppBar';
import AdsCardContainer from '../containers/AdsCardContainer';

class App extends Component {
  render() {
    const appBarStyle = {
      backgroundColor: '#4688F1',
    }

    const mainStyle = {
      maxWidth: '656px',
      marginLeft: 'auto',
      marginRight: 'auto',
    }

    return (
      <div>
        <header>
          <AppBar
            style={appBarStyle}
            showMenuIconButton={false}
            title={<span><FontAwesome name='home' /> Home</span>}
          />
        </header>

        <main style={mainStyle}>
          <AdsCardContainer />
        </main>

        <DevTools />
      </div>
    );
  }
}

export default App;
