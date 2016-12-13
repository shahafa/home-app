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
  if (getState().getAdsInit) {
    return null;
  }
  dispatch(getAdsInit());

  return fetch('/api/getAds', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${AuthService.getToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ date }),
  })
  .then(response => response.json())
  .then((filters) => {
    dispatch(getAdsResult(date, filters.data.ads));
  });
};
