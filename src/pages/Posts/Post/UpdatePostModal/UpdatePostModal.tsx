import { FC } from 'react';
import { Box, Modal } from '@mui/material';

import Title from 'components/Typography/Title';
import PostForm from './PostForm';

import { IPost } from 'interfaces/post';

interface IProps {
  data?: IPost;
  isOpen: boolean;
  handleClose: () => void;
  // eslint-disable-next-line no-unused-vars
  handlePostUpdate: (data: IPost) => void;
}

const UpdatePostModal: FC<IProps> = ({ data, isOpen, handleClose, handlePostUpdate }: IProps) => {
  return (
    <Modal keepMounted open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute' as const,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: 800,
          bgcolor: 'background.paper',
          border: '1px solid #000',
          boxShadow: 24,
          p: 2,
        }}
      >
        <Title>Update post</Title>
        <PostForm {...{ data, handleClose, handlePostUpdate }} />
      </Box>
    </Modal>
  );
};

export default UpdatePostModal;
