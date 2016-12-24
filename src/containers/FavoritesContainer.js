import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getFavorites } from '../actions/favoritesActions';
import Favorites from '../components/Favorites';

class AdContainer extends React.Component {
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
      <Favorites favorites={favorites} />
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites.favorites,
});

export default connect(mapStateToProps)(AdContainer);