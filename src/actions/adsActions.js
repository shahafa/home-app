import AuthService from '../utils/AuthService';

const getAdsInit = () => ({
  type: 'GET_ADS_INIT',
});

const getAdsResult = (date, ads) => ({
  type: 'GET_ADS_RESULT',
  date,
  ads,
});

export const getAds = date => (dispatch, getState) => {
  if (getState().ads.getAdsInit) {
    return null;
  }
  dispatch(getAdsInit());

  return fetch('/api/getApartments', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${AuthService.getToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      date,
      filterActive: getState().filter.filterActive,
    }),
  })
  .then(response => response.json())
  .then((response) => {
    dispatch(getAdsResult(date, response.data.ads.filter(ad => ad.description !== undefined)));
  });
};

const searchAdsInit = searchQuery => ({
  type: 'SEARCH_ADS_INIT',
  searchQuery,
});

const searchAdsResult = ads => ({
  type: 'SEARCH_ADS_RESULT',
  ads,
});

export const searchAds = query => (dispatch) => {
  dispatch(searchAdsInit(query));

  return fetch('/api/searchApartments', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${AuthService.getToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  })
  .then(response => response.json())
  .then((response) => {
    dispatch(searchAdsResult(response.data.ads.filter(ad => ad.description !== undefined)));
  });
};

export const searchAdsReset = () => ({
  type: 'SEARCH_ADS_RESET',
});

export const removeAds = () => ({
  type: 'REMOVE_ADS',
});
