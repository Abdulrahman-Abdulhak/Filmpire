import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function Error({ retry = () => {} }) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <Typography variant="subtitle1">Something went wrong</Typography>
      <Button onClick={retry}>Try Again</Button>
    </Box>
  );
}

export default Error;
