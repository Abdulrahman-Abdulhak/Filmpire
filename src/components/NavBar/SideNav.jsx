import React from 'react';

import { useTheme } from '@emotion/react';
import { Box, CircularProgress, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useStyles from './style';
import catGenres from '../../assets/cat_genre';
import { useGetGenresQuery } from '../../services/TMDB';
import { selectCatOrGenre } from '../../features/currentCatOrGenre';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

function SideNav({ menu }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');

  const dispatch = useDispatch();
  const { data, isLoading } = useGetGenresQuery();
  // console.log(data);

  const selectNav = (val) => {
    menu.toggleMenu(false);
    dispatch(selectCatOrGenre(val));
  };

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
              onClick={() => selectNav(value)}
            >
              <ListItemIcon className={classes.listItem}>
                <img src={catGenres[label.toLowerCase()]} alt="" />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          )))}
        </List>
      </div>
      <Divider />
      <div>
        <List>
          <ListSubheader>Genres</ListSubheader>
          {
            isLoading ? (
              <Box display="flex" justifyContent="center" alignItems="center">
                <CircularProgress />
              </Box>
            ) : data.genres.map((({ id, name }) => (
              <ListItemButton
                key={`genre:${id}`}
                onClick={() => selectNav(id)}
              >
                <ListItemIcon className={classes.listItem}>
                  <img src={catGenres[name.toLowerCase()]} alt="" />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            )))
          }
        </List>
      </div>
    </Drawer>
  );
}

export default SideNav;
