import AuthService from '../utils/AuthService';

const getFiltersInit = () => ({
  type: 'GET_FILTERS_INIT',
});

const getFiltersResult = filters => ({
  type: 'GET_FILTERS_RESULT',
  filters,
});

export const getFilters = () => (dispatch, getState) => {
  if (getState().getFiltersInit) {
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
  if (getState().addFilterInit) {
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
    .then((json) => {
      dispatch(addFilterResult());
      dispatch(getFilters());
    });
};

const deleteFilterInit = () => ({
  type: 'DELETE_FILTER_INIT',
});

const deleteFilterResult = () => ({
  type: 'DELETE_FILTER_RESULT',
});

export const deleteFilter = filterId => (dispatch, getState) => {
  if (getState().deleteFilterInit) {
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
    .then((json) => {
      dispatch(deleteFilterResult());
      dispatch(getFilters());
    });
};
