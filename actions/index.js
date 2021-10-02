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

export const changeSidebarOpen = () => (
  {
    type: 'CHANGE'
  }
);

export const dismissPost = postId => (
  {
    type: 'DISMISS_POST',
    payload: postId
  }
);

export const updateRead = post => (
  {
    type: 'UPDATE_READ',
    payload: post
  }
);
