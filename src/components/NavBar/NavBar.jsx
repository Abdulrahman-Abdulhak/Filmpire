import React, { useState } from 'react';
import { AppBar, Avatar, Button, IconButton, Toolbar, useMediaQuery } from '@mui/material';

import { AccountCircle, Brightness4, Brightness7, Menu } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';

import useStyles from './style';
import SideNav from './SideNav';

function NavBar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');
  const isAuthenticated = true;

  const toggleMenu = (state) => setMenuOpened((prev) => state ?? !prev);

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
          {!isMobile && 'Search...'}
          {isAuthenticated
            ? (
              <Button
                color="inherit"
                LinkComponent={Link}
                to="/profile/:id"
                style={{ gap: 8 }}
              >
                {!isMobile && 'My Movies'}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="your profile picture"
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                />
              </Button>
            ) : (
              <Button color="inherit" onClick={() => {}}>Login &nbsp; <AccountCircle /></Button>
            )}
        </Toolbar>
      </AppBar>
      <SideNav menu={{ menuOpened, toggleMenu }} />
    </>
  );
}

export default NavBar;
