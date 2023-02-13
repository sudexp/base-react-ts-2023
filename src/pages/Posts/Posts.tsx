import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link, List, ListItem, ListItemText, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { useGetPostsQuery, useDeletePostMutation, useAddPostMutation } from 'services/posts';
import SEO from 'components/SEO';
import { IPost } from 'interfaces/post';

const Test: FC = () => {
  const { data = [], error, isLoading /* , refetch */ } = useGetPostsQuery(20);
  const [deletePost] = useDeletePostMutation();
  const [addPost] = useAddPostMutation();

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Something went wrong</Typography>;

  const newPost = {
    id: '12',
    title: 'Cupiditate non iusto tenetur',
    body: 'Voluptatem velit et sit ducimus alias id distinctio natus. Possimus quae molestiae unde. Aut est magni.',
  };

  const handleDeletePost = async (id: string) => {
    await deletePost(id).unwrap();
    // refetch();
  };

  const handleAddPost = async () => {
    await addPost(newPost).unwrap();
  };

  return (
    <>
      <SEO title='Posts' description='Some text content of the POSTS page' name='KONE' type='Elevator' />
      <Box sx={{ mt: 2 }}>
        <Typography>This is a test page</Typography>
        <Link component={RouterLink} to='/'>
          Back To Root
        </Link>
        <List dense>
          {data.map(({ id, title, body }: IPost) => (
            <ListItem
              key={id}
              secondaryAction={
                <IconButton edge='end' aria-label='delete' onClick={() => handleDeletePost(id)}>
                  <DeleteIcon color='error' />
                </IconButton>
              }
            >
              <ListItemText
                primary={
                  <Link component={RouterLink} to={`/posts/${id}`}>
                    <Typography sx={{ fontWeight: 500, fontSize: 16 }}>{title}</Typography>
                  </Link>
                }
                secondary={body}
              />
            </ListItem>
          ))}
        </List>
        <Button onClick={handleAddPost}>Add a new post</Button>
      </Box>
    </>
  );
};

export default Test;
