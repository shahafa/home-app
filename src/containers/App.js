import React from 'react';
import DevTools from './DevTools';
import Header from '../components/Header';
import AdsCardCollection from './AdsCardCollection';
import FilterContainer from './FilterContainer';
import FavoritesContainer from './FavoritesContainer';

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

  favorites: {
    marginBottom: '40px',
  },
};

const developmentMode = process.env.NODE_ENV === 'development';

const App = () => (
  <div>
    <Header />

    <main style={styles.main}>
      <div style={styles.filter}>
        <FilterContainer />
      </div>

      <div style={styles.favorites}>
        <FavoritesContainer />
      </div>

      <div>
        <AdsCardCollection />
      </div>
    </main>

    {developmentMode &&
      <DevTools />
    }
  </div>
);

export default App;
