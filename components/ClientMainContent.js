import React, { useState, useEffect } from 'react';
import { 
  Container,
  Header,
  Sidebar,
  Checkbox,
  Segment
} from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import PostsList from './PostsList';
import PostContent from './PostContent';

export default function ClientMainContent() {
  const [visible, setVisible] = useState(true);
  const selectedPost = useSelector(state => state.selectedPost);

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
            width='very wide'
          >
            <Header as='h3' fluid inverted textAlign='center' style={{ paddingTop: '2em' }}>TOP POSTS</Header>
            <PostsList />
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              {selectedPost != null && <PostContent post={selectedPost}/>}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    </Container>
  );
};