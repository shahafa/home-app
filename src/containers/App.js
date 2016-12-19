import React from 'react';
import DevTools from './DevTools';
import Header from '../components/Header';
import AdsCardList from './AdsCardListContainer';
import FilterContainer from './FilterContainer';

const styles = {
  main: {
    maxWidth: '656px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  filter: {
    marginTop: '40px',
    marginBottom: '40px',
  },
};

const App = () => (
  <div>
    <Header />

    <main style={styles.main}>
      <div style={styles.filter}>
        <FilterContainer />
      </div>

      <AdsCardList />
    </main>

    <DevTools />
  </div>
);

export default App;