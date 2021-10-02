export const loadPosts = posts => (
  {
    type: 'LOAD',
    payload: posts
  }
);

export const updateSelected = post => (
  {
    type: 'UPDATE_SELECTED',
    payload: post
  }
);