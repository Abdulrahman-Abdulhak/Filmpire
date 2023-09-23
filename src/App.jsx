import { CssBaseline } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Movies, MovieInformation, Actors, Profile } from './pages';
import NavBar from './components/NavBar/NavBar';
import useStyles from './pages/styles';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.main}>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="movie/:id" element={<MovieInformation />} />
          <Route path="actors/:id" element={<Actors />} />
          <Route path="profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
