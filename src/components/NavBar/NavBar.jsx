import React, { useEffect, useState } from 'react';
import { AppBar, Avatar, Button, IconButton, Toolbar, useMediaQuery } from '@mui/material';

import { AccountCircle, Brightness4, Brightness7, Menu } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './style';
import SideNav from './SideNav';
import SearchField from '../SearchField/SearchField';
import { createSessionId, getUserBySessionId, requestToken } from '../../utils/auth';
import { setUser, userSelector } from '../../features/auth';
import { URLs } from '../../constants/constants';

function NavBar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');

  const { isAuthenticated, user } = useSelector(userSelector);
  const dispatch = useDispatch();

  const token = localStorage.getItem('request_token');
  const sessionIdLocal = localStorage.getItem('session_id');
  useEffect(async () => {
    if (sessionIdLocal && sessionIdLocal.toLocaleLowerCase() !== 'undefined') {
      const userRes = await getUserBySessionId(sessionIdLocal);
      dispatch(setUser(userRes));

      return;
    }

    if (!token || token.toLocaleLowerCase() === 'undefined') return;
    const sessionId = await createSessionId();
    const userRes = await getUserBySessionId(sessionId);
    dispatch(setUser(userRes));
  }, [token, sessionIdLocal]);

  const toggleMenu = (state) => setMenuOpened((prev) => state ?? !prev);

  const handleLogin = () => {
    requestToken();
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => toggleMenu()}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          )}
          <IconButton
            color="inherit"
            sx={{ ml: 1 }}
            onClick={() => {}}
          >
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <SearchField />}
          {isAuthenticated
            ? (
              <Button
                color="inherit"
                LinkComponent={Link}
                to={`/profile/${user.id}`}
                style={{ gap: 8 }}
              >
                {!isMobile && 'My Movies'}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="your profile picture"
                  src={URLs.profilePlaceholder}
                />
              </Button>
            ) : (
              <Button color="inherit" onClick={handleLogin}>Login &nbsp; <AccountCircle /></Button>
            )}
          {isMobile && <SearchField />}
        </Toolbar>
      </AppBar>
      <SideNav menu={{ menuOpened, toggleMenu }} />
    </>
  );
}

export default NavBar;
