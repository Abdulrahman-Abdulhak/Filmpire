import React from 'react';

import { useTheme } from '@emotion/react';
import { Divider, Drawer, List, ListItemButton, ListItemText, ListSubheader, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from './style';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top-rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const genres = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top-rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

function SideNav({ menu }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Drawer
      classes={{ paper: classes.sidePaper }}
      className={classes.sideNav}
      variant={isMobile ? 'temporary' : 'permanent'}
      anchor={isMobile ? 'right' : 'left'}
      open={isMobile ? menu.menuOpened : true}
      ModalProps={{ keepMounted: true }}
      onClose={() => menu.toggleMenu(false)}
    >
      <Link to="/" onClick={() => menu.toggleMenu(false)}>
        <img
          src={theme.palette.mode === 'dark'
            ? 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png'
            : 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png'}
          alt="site's logo"
        />
      </Link>
      <Divider />
      <div>
        <List>
          <ListSubheader>Categories</ListSubheader>
          {categories.map((({ label, value }) => (
            <ListItemButton
              key={`cat:${value}`}
              onClick={() => {
                menu.toggleMenu(false);
              }}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          )))}
        </List>
      </div>
      <Divider />
      <div>
        <List>
          <ListSubheader>Genres</ListSubheader>
          {genres.map((({ label, value }) => (
            <ListItemButton
              key={`cat:${value}`}
              onClick={() => {
                menu.toggleMenu(false);
              }}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          )))}
        </List>
      </div>
    </Drawer>
  );
}

export default SideNav;
