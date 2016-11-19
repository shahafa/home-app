import React, { Component } from 'react';
import DevTools from '../containers/DevTools';
import Header from './Header';
import AdsPage from '../containers/AdsPage';

class App extends Component {
  render() {
    const mainStyle = {
      maxWidth: '656px',
      marginLeft: 'auto',
      marginRight: 'auto',
    }

    return (
      <div>
        <Header />

        <main style={mainStyle}>
          <AdsPage />
        </main>

        <DevTools />
      </div>
    );
  }
}

export default App;
