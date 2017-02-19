const initialState = {
  getAdsInit: false,
  reloadRequired: false,
  searchAdsInit: false,
  searchQuery: '',
  searchResults: null,
};

const ads = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ADS_INIT':
      return Object.assign({}, state, {
        getAdsInit: true,
        reloadRequired: false,
      });
    case 'GET_ADS_RESULT':
      return Object.assign({}, state, {
        getAdsInit: false,
        reloadRequired: false,
        [action.date]: action.ads,
      });
    case 'SEARCH_ADS_INIT':
      return Object.assign({}, state, {
        searchAdsInit: true,
        searchResults: null,
        searchQuery: action.searchQuery,
      });
    case 'SEARCH_ADS_RESULT':
      return Object.assign({}, state, {
        searchAdsInit: false,
        searchResults: action.ads,
      });
    case 'SEARCH_ADS_RESET':
      return Object.assign({}, state, {
        searchAdsInit: false,
        searchResults: null,
        searchQuery: '',
      });
    case 'REMOVE_ADS':
      return ({
        getAdsInit: false,
        reloadRequired: true,
        searchAdsInit: false,
        searchQuery: '',
        searchResults: null,
      });
    default:
      return state;
  }
};

export default ads;
