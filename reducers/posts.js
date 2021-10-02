const postsReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD':
      return action.payload;
    case 'DISMISS_POST':
      return dismissPost(state, action.payload);
    case 'UPDATE_READ':
      return updateReadPost(state, action.payload);
    default:
      return state;
  }
}

const dismissPost = (state, key) => {
  return state.filter(p => p.data.id !== key);
};

const updateReadPost = (state, updatedPost) => {
  const index = state.indexOf(p => p.data.id === updatedPost.data.id);
  state.splice(index, 1, updatedPost);
  return state;
};

export default postsReducer;