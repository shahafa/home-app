/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unneeded-ternary */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AuthService from '../utils/AuthService';
import { getFavorites } from '../actions/favoritesActions';
import Ad from '../components/Ad';

class AdContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    ad: PropTypes.object.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }

  addFavorite(favoriteId) {
    const { dispatch } = this.props;

    fetch('/api/addFavorite', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${AuthService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ favoriteId }),
    })
    .then(() => {
      dispatch(getFavorites());
    });
  }

  deleteFavorite(favoriteId) {
    const { dispatch } = this.props;

    fetch('/api/removeFavorite', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${AuthService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ favoriteId }),
    })
    .then(() => {
      dispatch(getFavorites());
    });
  }

  handleFavoriteButtonChecked = (event, isInputChecked) => {
    const { ad } = this.props;

    if (isInputChecked) {
      this.addFavorite(ad.id);
    } else {
      this.deleteFavorite(ad.id);
    }
  }

  render() {
    const {
      ad,
      isFavorite,
    } = this.props;

    return (
      <Ad
        createdAt={ad.createdAt}
        title={ad.title}
        description={ad.description}
        rooms={ad.rooms}
        parking={ad.parking}
        elevator={ad.elevator}
        balcony={ad.balcony}
        renovated={ad.renovated}
        price={ad.price}
        contactName={ad.contactName}
        phone={ad.phone}
        url={ad.url}
        floor={ad.floor}
        meter={ad.meter}
        images={ad.images}
        priceChanged={ad.priceChanged}
        priceHistory={ad.priceHistory}
        isFavorite={isFavorite}
        onFavoriteButtonChecked={this.handleFavoriteButtonChecked}
        isActive={ad.isActive}
        unActiveDate={ad.unActiveDate}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isFavorite: state.favorites.favorites.find(ad => ad.id === ownProps.ad.id) ? true : false,
});

export default connect(mapStateToProps)(AdContainer);
