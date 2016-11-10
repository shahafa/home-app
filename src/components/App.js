import './App.css';
import 'font-awesome/css/font-awesome.css';
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import AppBar from 'material-ui/AppBar';
import { blue500 } from 'material-ui/styles/colors';
import AdsCard from './AdsCard';

class App extends Component {
  render() {
    const appBarLeftIcon = <span><FontAwesome name='home' /> Home</span>

    return (
      <div>
        <header>
          <AppBar
            style={{ backgroundColor: blue500 }}
            showMenuIconButton={false}
            title={appBarLeftIcon}
          />
        </header>

        <main className="main">
          <AdsCard
            date={1}
          />
        </main>

        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
