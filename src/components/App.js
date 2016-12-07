import React from 'react';
import DevTools from '../containers/DevTools';
import Header from './Header';
import AdsPage from '../containers/AdsPage';

const styles = {
  main: {
    maxWidth: '656px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

const App = () => (
  <div>
    <Header />

    <main style={styles.main}>
      <AdsPage />
    </main>

    <DevTools />
  </div>
);

export default App;
