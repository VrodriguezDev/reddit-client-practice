import
{
  List,
  Image,
  Header,
  Segment,
  Label
} from 'semantic-ui-react';

export default function PostListItem({ postData }) {
  return (
    <List.Item>
      <Segment basic clearing>
        <Header color='grey' floated='left' size='medium'>{postData.author}</Header>
        <Header color='grey' floated='right' size='small'>{postData.score}</Header>
      </Segment>
      <Image src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
      <List.Content>
        <List.Header as='a'>{postData.num_comments} Comments</List.Header>
        <List.Description>
          {postData.title}
        </List.Description>
      </List.Content>
    </List.Item>
  );
}