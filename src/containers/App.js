import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DevTools from './DevTools';
import Header from '../components/Header';
import AdsCardCollection from './AdsCardCollection';
import FilterContainer from './FilterContainer';
import FavoritesContainer from './FavoritesContainer';
import SearchResultsContainer from './SearchResultsContainer';

const styles = {
  main: {
    maxWidth: '700px',
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

const App = ({
  searchQuery,
}) => (
  <div>
    <Header />

    <main style={styles.main}>
      <div style={styles.filter}>
        <FilterContainer />
      </div>

      {searchQuery !== '' ?
        <div>
          <SearchResultsContainer />
        </div>
      :
        <div>
          <div style={styles.favorites}>
            <FavoritesContainer />
          </div>

          <div>
            <AdsCardCollection />
          </div>
        </div>
      }
    </main>

    {developmentMode &&
      <DevTools />
    }
  </div>
);

App.propTypes = {
  searchQuery: PropTypes.string,
};

const mapStateToProps = state => ({
  searchQuery: state.ads.searchQuery,
});

export default connect(mapStateToProps)(App);
