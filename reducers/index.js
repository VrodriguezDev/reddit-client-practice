import postsReducer from './posts';
import selectedReducer from './selected';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  posts: postsReducer,
  selectedPost: selectedReducer
  });

export default allReducers;