const initialState = {
  getAdsInit: false,
  ads: [],
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
        ads: Object.assign({}, state.ads, { [action.date]: action.ads }),
      });
    default:
      return state;
  }
};

export default ads;
