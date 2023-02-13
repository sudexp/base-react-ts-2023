import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';

import { FallbackProps } from 'react-error-boundary';

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Box role='alert'>
      <Typography>Something went wrong:</Typography>
      <Typography component='pre'>{error.message}</Typography>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </Box>
  );
};

export default ErrorFallback;
