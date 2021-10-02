import { useEffect } from 'react';
import {
  List
} from 'semantic-ui-react';
import PostListItem from './PostListItem';
import useFetchWithSWR from '../fetcher';
import { useSelector, useDispatch } from 'react-redux';
import { loadPosts, updateSelected, updateRead } from '../actions';

const DATA_URL = "https://www.reddit.com/top.json?limit=50";

const generatePostsList = (posts, selectedPost, updateSelectedPost) => (
  posts.map(post => <PostListItem
                      selected={selectedPost !== null && selectedPost.data.id === post.data.id}
                      read={post.isRead}
                      key={post.data.id}
                      postData={post.data}
                      updateFunc={updateSelectedPost}/>)
);

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const selectedPost = useSelector(state => state.selectedPost);
  const [fetchedData, error] = useFetchWithSWR(DATA_URL);
  const updateSelectedPost = (key) => {
    let updatedPost = posts.find(p => p.data.id === key);
    updatedPost.isRead = true;
    dispatch(updateRead(updatedPost));
    dispatch(updateSelected(updatedPost));
  };
  const getData = () => {
    if(posts.length > 0) {
      return;
    }
    if(error) {
      console.log("Something went wrong");
      console.log(error);
      return;
    }
    if(fetchedData) {
      console.log("Data fetched successfully");
      console.log(fetchedData);
      dispatch(loadPosts(fetchedData.data.children));
    }
  }
  useEffect(() => {
    getData();
    console.log("Loaded data:")
    console.log(posts);
  });

  if(!posts || posts.length === 0) {
    return <span style={{ paddingLeft: '5em'}}>Loading...</span>
  } else {
    if(posts.length > 0) {
      return (
        <div style={{ width: '95%' }}>
          <List inverted divided animated selection size='large'>
            {generatePostsList(posts, selectedPost, updateSelectedPost)}
          </List>
        </div>
      );
    } else {
      return <span style={{ paddingLeft: '5em'}}>No data</span>;
    }
  }
};

export default PostsList;