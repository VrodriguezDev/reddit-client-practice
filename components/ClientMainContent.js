import { 
  Container,
  Header,
  Sidebar,
  Segment
} from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import PostsList from './PostsList';
import PostContent from './PostContent';

export default function ClientMainContent() {
  const sidebarOpen = useSelector(state => state.sidebar);
  const selectedPost = useSelector(state => state.selectedPost);

  return (
    <Container basic fluid style={{ height: '100%' }}>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Segment}
            animation='slide along'
            icon='labeled'
            inverted
            vertical
            visible={sidebarOpen}
            width='very wide'
          >
            <Header as='h3' fluid inverted textAlign='center' style={{ paddingTop: '2em' }}>
              TOP POSTS
            </Header>
            <PostsList />
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              {selectedPost !== null ?
                <PostContent post={selectedPost}/> :
                <span style={{ fontSize: '16px', marginTop: '12em' }}>No post selected</span>}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    </Container>
  );
};