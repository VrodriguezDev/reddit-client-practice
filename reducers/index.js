import postsReducer from './posts';
import selectedReducer from './selected';
import sidebarReducer from './sidebar';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  posts: postsReducer,
  selectedPost: selectedReducer,
  sidebar: sidebarReducer
  });

export default allReducers;