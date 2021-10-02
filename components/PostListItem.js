/* eslint-disable jsx-a11y/alt-text */
import
{
  List,
  Image,
  Header,
  Segment,
  Grid,
  Container,
  Button,
  Icon
} from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { dismissPost, updateSelected } from '../actions';

function formatDMY(d) {
  return ('0' + d.getDate()).slice(-2) + '/' +
         ('0' + (d.getMonth() + 1)).slice(-2) + '/' +
         ('000' + d.getFullYear()).slice(-4);
}

const calculatePostedXAgo = (created) => {
  // console.log("CreatedDate: " + formatDMY(new Date(created*1000)));
  let now = Math.round(new Date() / 1000);
  let xSecondsAgo = now - created;
  let xAgo;
  let unit;
  //Less than 60 hours
  if(xSecondsAgo/60 < 60) {
    xAgo = Math.floor(xSecondsAgo/60);
    unit = "Minutes";
  } else
  //Less than 24 hours
  if(xSecondsAgo/3600 < 24) {
    xAgo = Math.floor(xSecondsAgo/3600);
    unit = "Hours";
  } else
  //Less than 31 days
  if(xSecondsAgo/(3600*24) < 31) {
    xAgo = Math.floor(xSecondsAgo/(3600*24));
    unit = "Days";
  } else
  //Less than 12 months
  if(xSecondsAgo/(3600*24*31) < 12) {
    xAgo = Math.floor(xSecondsAgo/(3600*24*31));
    unit = "Months";
  } else
  //Show in years
  {
    xAgo = Math.floor(xSecondsAgo/(3600*24*31*12));
    unit = "Years";
  }
  return xAgo + " " + unit + " ago";
};

export default function PostListItem({ postData, selected, read, updateFunc }) {

  const dispatch = useDispatch();
  const dismissPostFunc = (id) => {
    dispatch(dismissPost(id));
    if(selected) {
      dispatch(updateSelected(null));
    }
  };
  return (
    <List.Item>
      <Segment basic clearing color={selected ? 'red' : ''}>
        <Header color='orange' floated='left' size='medium'>{postData.author}</Header>
        <Header color='grey' floated='right' size='small'>{calculatePostedXAgo(postData.created)}</Header>
      </Segment>
      <Container>
      <Grid columns={2}>
        <Grid.Row onClick={() => updateFunc(postData.id)}>
          <Grid.Column width={postData.thumbnail ? 6 : 0}>
            <Image src={postData.thumbnail} />
          </Grid.Column>
          <Grid.Column width={postData.thumbnail ? 8 : 14}>
            <List.Content>
              <a color='white'>{postData.subreddit_name_prefixed}</a>
              <Header color={read ? 'purple' : 'grey'}>
                {postData.title}
              </Header>
            </List.Content>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Segment basic inverted clearing>
            <Button animated='fade' color='grey' floated='left' onClick={() => dismissPostFunc(postData.id)}>
              <Button.Content visible>
                <Icon name='cancel' style={{ paddingRight: '3em', paddingLeft: '3em' }}/>
              </Button.Content>
              <Button.Content hidden>
                Dismiss post
              </Button.Content>
            </Button>
            <Header as='Header' color='teal' size='tiny' floated='right' style={{paddingTop: '8px'}}>
              {postData.num_comments} Comments
            </Header>
          </Segment>
        </Grid.Row>
      </Grid>
      </Container>
    </List.Item>
  );
}