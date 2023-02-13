import { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';

import SEO from 'components/SEO';
import Header from 'components/Typography/Header';
import Title from 'components/Typography/Title';
import ConfirmButton from 'components/Buttons/ConfirmButton';
import SpinnerButton from 'components/Buttons/SpinnerButton';
import CancelButton from 'components/Buttons/CancelButton';

const Qwert: FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <SEO title='QWERT' description='Some text content of the QWERT page' name='KONE' type='Elevator' />
      <Box sx={{ mt: 2 }}>
        <Header noWrap>Header</Header>
        <Title noWrap sx={{ color: 'red' }}>
          Title
        </Title>
        <Link component={RouterLink} to='/'>
          Back To Root
        </Link>
        <ConfirmButton sx={{ m: 2 }} color='success' onClick={() => console.log('test')}>
          Confirm
        </ConfirmButton>
        <SpinnerButton loading={loading} variant='outlined' size='medium' color='warning' onClick={() => setLoading(true)}>
          Send
        </SpinnerButton>
        <CancelButton color='error' sx={{ m: 2 }} onClick={() => setLoading(false)}>
          Cancel
        </CancelButton>
      </Box>
    </>
  );
};

export default Qwert;
