import { FC, useEffect, useState } from 'react';
import { Link as RouterLink, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Stack, Typography, Link, Button, TextField } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { initiateRoot } from 'pages/Root/actions';
import SEO from 'components/SEO';
import Bomb from 'components/Bomb';
import ErrorFallback from 'components/ErrorFallback';

import styles from './Root.module.css';

const Root: FC = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { loading, data } = useAppSelector(state => state.root);

  useEffect(() => {
    if (data.length === 0) dispatch(initiateRoot());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [text, setText] = useState<string>('');

  const showToast = () => toast.info('Hello World!');

  if (loading) return <Typography sx={{ m: 2 }}>Loading...</Typography>;

  return (
    <>
      <SEO title='Root page' description='Some text content of the Root page' name='KONE' type='Elevator' />
      <Box sx={{ m: 2 }}>
        <Typography variant='h1'>Root</Typography>
        {data.map(({ id, text }, index) => {
          return (
            <Stack key={id + index} direction='row' spacing={1}>
              <Typography>{id}.</Typography>
              <Typography>{text}</Typography>
            </Stack>
          );
        })}
        <Stack direction='row' spacing={2} sx={{ mt: 2 }}>
          <Link
            component={RouterLink}
            to='/posts'
            // disabled={pathname === '/posts'}
            sx={{ color: pathname === '/posts' ? 'error.main' : 'primary.main' }}
          >
            To posts page
          </Link>
          <Link
            component={RouterLink}
            to='/qwert'
            // disabled={pathname === '/qwert'}
            sx={{ color: pathname === '/qwert' ? 'error.main' : 'primary.main' }}
          >
            To qwert page
          </Link>
          <Link component={RouterLink} to='/404' classes={{ root: styles.root }}>
            To not found page
          </Link>
        </Stack>
        <Button variant='contained' sx={{ my: 3 }} onClick={showToast}>
          Toast
        </Button>
        <Box sx={{ maxWidth: 350 }}>
          <TextField fullWidth placeholder='Type "bomb" to test Error Boundary' value={text} onChange={e => setText(e.target.value)} />
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => setText('')} resetKeys={[text]}>
            <Bomb text={text} />
          </ErrorBoundary>
        </Box>
        <main className='container'>
          <Outlet />
        </main>
      </Box>
    </>
  );
};

export default Root;
