import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import { logout, userSelector } from '../../features/auth';

function Profile() {
  const { user, isAuthenticated } = useSelector(userSelector);
  const userName = user.name?.length ? user.name : user.username;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) return;

    navigate(-1, {
      replace: true,
    });
  }, [isAuthenticated]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Box padding={4}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" textTransform="capitalize">{userName}</Typography>
        <Button onClick={logoutHandler}>Logout <ExitToApp /></Button>
      </Box>
    </Box>
  );
}

export default Profile;
