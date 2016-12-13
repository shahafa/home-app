const initialState = {
  getFiltersInit: false,
  filters: [],
  addFilterInit: false,
  deleteFilterInit: false,
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FILTERS_INIT':
      return Object.assign({}, state, {
        getFiltersInit: true,
      });
    case 'GET_FILTERS_RESULT':
      return Object.assign({}, state, {
        getFiltersInit: false,
        filters: action.filters,
      });
    case 'ADD_FILTER_INIT':
      return Object.assign({}, state, {
        addFilterInit: true,
      });
    case 'ADD_FILTER_RESULT':
      return Object.assign({}, state, {
        addFilterInit: false,
      });
    case 'DELETE_FILTER_INIT':
      return Object.assign({}, state, {
        deleteFilterInit: true,
      });
    case 'DELETE_FILTER_RESULT':
      return Object.assign({}, state, {
        deleteFilterInit: true,
      });
    default:
      return state;
  }
};

export default filter;
