import AuthService from '../utils/AuthService';

const getFavoritesInit = () => ({
  type: 'GET_FAVORITES_INIT',
});

const getFavoritesResult = favorites => ({
  type: 'GET_FAVORITES_RESULT',
  favorites,
});

export const getFavorites = () => (dispatch, getState) => {
  if (getState().favorites.getFavoritesInit) {
    return null;
  }
  dispatch(getFavoritesInit());

  return fetch('/api/getFavorites', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${AuthService.getToken()}`,
    },
  })
  .then(response => response.json())
  .then((favorites) => {
    dispatch(getFavoritesResult(favorites.data.favorites));
  });
};
