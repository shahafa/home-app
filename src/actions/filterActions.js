import AuthService from '../utils/AuthService';
import { removeAds } from './adsActions';

const getFiltersInit = () => ({
  type: 'GET_FILTERS_INIT',
});

const getFiltersResult = filters => ({
  type: 'GET_FILTERS_RESULT',
  filters,
});

export const getFilters = () => (dispatch, getState) => {
  if (getState().filter.getFiltersInit) {
    return null;
  }
  dispatch(getFiltersInit());

  return fetch('/api/getFilters', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${AuthService.getToken()}`,
    },
  })
  .then(response => response.json())
  .then((filters) => {
    dispatch(getFiltersResult(filters.data.filters));
  });
};

const addFilterInit = () => ({
  type: 'ADD_FILTER_INIT',
});

const addFilterResult = () => ({
  type: 'ADD_FILTER_RESULT',
});

export const addFilter = filter => (dispatch, getState) => {
  if (getState().filter.addFilterInit) {
    return null;
  }
  dispatch(addFilterInit());

  return fetch('/api/addFilter', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${AuthService.getToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ filter }),
  }).then(response => response.json())
    .then(() => {
      dispatch(addFilterResult());
      dispatch(getFilters());
      dispatch(removeAds());
    });
};

const deleteFilterInit = () => ({
  type: 'DELETE_FILTER_INIT',
});

const deleteFilterResult = () => ({
  type: 'DELETE_FILTER_RESULT',
});

export const deleteFilter = filterId => (dispatch, getState) => {
  if (getState().filter.deleteFilterInit) {
    return null;
  }
  dispatch(deleteFilterInit());

  return fetch('/api/deleteFilter', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${AuthService.getToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ filterId }),
  }).then(response => response.json())
    .then(() => {
      dispatch(deleteFilterResult());
      dispatch(getFilters());
      dispatch(removeAds());
    });
};

const changeFilterActiveState = () => ({
  type: 'CHANGE_FILTER_ACTIVE_STATE',
});

export const changeFilterVisibleState = () => ({
  type: 'CHANGE_FILTER_VISIBLE_STATE',
});

const getNeighborhoodsListResult = neighborhoodsList => ({
  type: 'GET_NEIGHBIRHOODS_LIST_RESULT',
  neighborhoodsList,
});

export const getNeighborhoodsList = () => (dispatch) => {
  fetch('/api/getNeighborhoods', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${AuthService.getToken()}`,
    },
  })
  .then(response => response.json())
  .then((neighborhoods) => {
    dispatch(getNeighborhoodsListResult(neighborhoods.data.neighborhoods[0].neighborhoods));
  });
};

export const toggleFilterActiveState = () => (dispatch) => {
  dispatch(changeFilterActiveState());
  dispatch(removeAds());
};
