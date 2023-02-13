import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Typography, Button } from '@mui/material';

import { useGetPostQuery, useUpdatePostMutation } from 'services/posts';
import Title from 'components/Typography/Title';
import UpdatePostModal from './UpdatePostModal';

import { IPost } from 'interfaces/post';

const Post: FC = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetPostQuery(id);
  const [updatePost] = useUpdatePostMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openUpdateModal = () => setIsModalOpen(true);
  const closeUpdateModal = () => setIsModalOpen(false);

  const handlePostUpdate = async (data: IPost) => {
    await updatePost(data);
    toast.success('Post update was success!');
  };

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Something went wrong</Typography>;

  return (
    <>
      <Box sx={{ mt: 2 }}>
        <Title>{data?.title}</Title>
        <Typography>{data?.body}</Typography>
        <Button variant='contained' size='small' sx={{ mt: 2 }} onClick={openUpdateModal}>
          Update Post
        </Button>
      </Box>
      <UpdatePostModal data={data} isOpen={isModalOpen} handleClose={closeUpdateModal} handlePostUpdate={handlePostUpdate} />
    </>
  );
};

export default Post;
