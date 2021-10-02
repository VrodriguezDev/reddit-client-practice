import { useEffect } from 'react';
import {
  List
} from 'semantic-ui-react';
import PostListItem from './PostListItem';
import useFetchWithSWR from '../fetcher';
import { useSelector, useDispatch } from 'react-redux';
import { loadPosts, updateSelected } from '../actions';

const DATA_URL = "https://www.reddit.com/top.json?limit=50";

const generatePostsList = (posts, selectedPost, updateSelectedPost) => (
  posts.map(post => <PostListItem
                      selected={selectedPost && selectedPost !== null && selectedPost.data.id === post.data.id}
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
    dispatch(updateSelected(posts.find(p => p.data.id === key)));
  };
  const getData = () => {
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

  if(!posts) {
    return <span>Loading...</span>
  } else {
    if(posts && posts.length > 0) {
      return (
        <List inverted divided animated selection size='large'>
          {generatePostsList(posts, selectedPost, updateSelectedPost)}
        </List>
      );
    } else {
      return <span>No data</span>
    }
  }
};

export default PostsList;