const home = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return Object.assign({}, state, {
        profile: action.profile,
      });
    default:
      return state;
  }
};

export default home;
