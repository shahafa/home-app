import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getFavorites } from '../actions/favoritesActions';
import AdsCard from '../components/AdsCard';

class FavoritesContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    favorites: PropTypes.array,
  }

  componentWillMount() {
    const {
      dispatch,
    } = this.props;

    dispatch(getFavorites());
  }

  render() {
    const {
      favorites,
    } = this.props;

    return (
      <div>
        {favorites && favorites.length !== 0 &&
          <AdsCard ads={favorites} title="מועדפים" />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites.favorites,
});

export default connect(mapStateToProps)(FavoritesContainer);
