import './App.css';
import 'font-awesome/css/font-awesome.css';
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
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
            day={"2016-11-05 21:22:31.298Z"}
          />
        </main>

        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
