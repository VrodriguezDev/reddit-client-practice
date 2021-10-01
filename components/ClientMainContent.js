import React, { useState, useEffect } from 'react';
import { 
  Container,
  Header,
  Sidebar,
  Grid,
  Checkbox,
  Menu,
  Segment,
  Image,
  List
} from 'semantic-ui-react';
import PostListItem from './PostListItem';
const EX_DATA_FILE = "../exampledata/top.json";

const generatePostsList = (posts) => (
  posts.map(post => <PostListItem key={post.data.id} postData={post.data} />)
);

const PostsList = () => {
  const [data, setData] = useState();
  const getData = () => {
    fetch(EX_DATA_FILE,
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    ).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(readData) {
        console.log(readData);
        setData(readData);
      });
  }
  useEffect(()=>{   
      getData();
  }, []);
  console.log(data);

  if(!data) {
    return <span>Loading...</span>
  } else {
    if(data.data.children && data.data.children.length > 0) {
      return (
        <List divided animated selection size='large'>
          {generatePostsList(data.data.children)}
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
            <Header as='h3' fluid inverted style={{ paddingTop: '2em' }}>TOP POSTS</Header>
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