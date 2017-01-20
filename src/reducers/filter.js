const initialState = {
  visible: false,
  getFiltersInit: false,
  filters: [],
  addFilterInit: false,
  deleteFilterInit: false,
  filterActive: true,
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
        deleteFilterInit: false,
      });
    case 'CHANGE_FILTER_ACTIVE_STATE':
      return Object.assign({}, state, {
        filterActive: !state.filterActive,
      });
    case 'CHANGE_FILTER_VISIBLE_STATE':
      return Object.assign({}, state, {
        visible: !state.visible,
      });
    case 'GET_NEIGHBIRHOODS_LIST_RESULT':
      return Object.assign({}, state, {
        neighborhoodsList: action.neighborhoodsList,
      });
    default:
      return state;
  }
};

export default filter;
