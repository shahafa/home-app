const ads = (state = [], action) => {
  switch (action.type) {
    case 'LOADING_ADS':
      return Object.assign({}, state, {
        isLoadingAds: true
      });
    case 'LOADING_ADS_COMPLETED':
      return Object.assign({}, state, {
        isLoadingAds: true
      });
    default:
      return state
  }
}

export default ads
