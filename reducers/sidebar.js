const sidebarReducer = (state = true, action) => {
  switch (action.type) {
    case 'CHANGE':
      return !state;
    default:
      return state;
  }
};

export default sidebarReducer;