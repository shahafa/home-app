const initialState = {
  getAdsInit: false,
};

const ads = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ADS_INIT':
      return Object.assign({}, state, {
        getAdsInit: true,
      });
    case 'GET_ADS_RESULT':
      return Object.assign({}, state, {
        getAdsInit: false,
        [action.date]: action.ads,
      });
    case 'REMOVE_ADS':
      return ({
        getAdsInit: false,
      });
    default:
      return state;
  }
};

export default ads;
