const initialState = {
  favorites: [],
  getFavoritesInit: false,
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FAVORITES_INIT':
      return Object.assign({}, state, {
        getFavoritesInit: true,
      });
    case 'GET_FAVORITES_RESULT':
      return Object.assign({}, state, {
        getFavoritesInit: false,
        favorites: action.favorites,
      });
    default:
      return state;
  }
};

export default filter;
