import React, { useState, useEffect } from 'react';
import { 
  Container,
  Header,
  Sidebar,
  Checkbox,
  Segment,
  List
} from 'semantic-ui-react';
import PostListItem from './PostListItem';
import useFetchWithSWR from '../fetcher';
const DATA_URL = "https://www.reddit.com/top.json?limit=50";

const generatePostsList = (posts, selectedPost, updateSelectedPost) => (
  posts.map(post => <PostListItem
                      selected={selectedPost && selectedPost.data.id === post.data.id}
                      key={post.data.id}
                      postData={post.data}
                      updateFunc={updateSelectedPost}/>)
);

const PostsList = () => {
  const [posts, setPosts] = useState();
  const [selectedPost, setSelectedPost] = useState();
  const [fetchedData, error] = useFetchWithSWR(DATA_URL);
  const updateSelectedPost = (key) => {
    setSelectedPost(posts.find(p => p.data.id === key));
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
      setPosts(fetchedData.data.children);
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

export default function ClientMainContent() {
  const [visible, setVisible] = React.useState(true);

  return (
    <Container basic fluid style={{ height: '100%' }}>
        {/* Using a checkbox for now, will add real functionality later */}
        <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        />
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Segment}
            animation='slide along'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='wide'
          >
            <Header as='h3' fluid inverted textAlign='center' style={{ paddingTop: '2em' }}>TOP POSTS</Header>
            <PostsList />
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h2' dividing>Content</Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    </Container>
  );
};