const initialState = {
  getAdsInit: false,
  reloadRequired: false,
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
    case 'REMOVE_ADS':
      return ({
        getAdsInit: false,
        reloadRequired: true,
      });
    default:
      return state;
  }
};

export default ads;
