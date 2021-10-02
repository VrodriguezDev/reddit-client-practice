import {
  Container,
  Header,
  Card,
  Image,
  Icon,
  Button,
  Segment
} from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSidebarOpen } from '../actions'

const PostContent = ({ post }) => {
  const { data } = post;
  const dispatch = useDispatch();
  const sidebarOpen = useSelector(state => state.sidebar);

  const changeSidebar = () => {
    dispatch(changeSidebarOpen());
  };
  return (
    <Container fluid>
      <Segment fluid basic>
      <Button
        onClick={changeSidebar}
        inverted={sidebarOpen}
        secondary
        circular
        floated='left'
        size='small'
        icon='bars'/>
      <div>
      <Header dividing>
        {data.title}
        <Header.Subheader>
          {data.subreddit_name_prefixed}
        </Header.Subheader>
      </Header>
      </div>
      </Segment>
      <Card style={{width: '35%'}}>
        {data.thumbnail && <Image src={data.thumbnail} wrapped ui={false} />}
        <Card.Content>
          by <Card.Header>{data.author}</Card.Header>
          <Card.Description>
            {data.title}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {data.num_comments} Comments
          </a>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default PostContent;