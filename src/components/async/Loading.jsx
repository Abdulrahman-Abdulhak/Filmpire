import React from 'react';
import { Box, CircularProgress } from '@mui/material';

function Loading({ className }) {
  return (
    <Box className={className} display="flex" justifyContent="center" alignItems="center">
      <CircularProgress size="4rem" />
    </Box>
  );
}

export default Loading;
