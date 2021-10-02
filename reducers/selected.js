const selectedReducer = (state = null, action) => {
  switch(action.type) {
    case 'UPDATE_SELECTED':
      return action.payload;
    default:
      return state;
  }
}

export default selectedReducer;