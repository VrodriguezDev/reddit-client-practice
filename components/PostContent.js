import {
  Container,
  Header,
  Card,
  Image,
  Icon
} from 'semantic-ui-react';

const PostContent = ({ post }) => {
  const { data } = post;
  return (
    <Container fluid>
      <Header dividing>
        {data.title}
        <Header.Subheader>
          {data.subreddit_name_prefixed}
        </Header.Subheader>
      </Header>
      <Card style={{width: '35%'}}>
        <Image src={data.thumbnail} wrapped ui={false} />
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