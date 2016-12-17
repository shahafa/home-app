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
    dispatch(getAdsResult(date, response.data.ads));
  });
};

export const removeAds = () => ({
  type: 'REMOVE_ADS',
});
