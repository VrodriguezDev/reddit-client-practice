import React from 'react';
import { 
  Container,
  Header,
  Sidebar,
  Grid,
  Checkbox,
  Menu,
  Segment,
  Image
} from 'semantic-ui-react';

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
            as={Menu}
            animation='slide along'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='wide'
          >
            <Header as='h3' fluid inverted style={{ paddingTop: '2em' }}>TOP POSTS</Header>
          </Sidebar>
          <Sidebar.Pusher >
            <Segment basic>
              <Header as='h2' dividing>Content</Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    </Container>
  );
};