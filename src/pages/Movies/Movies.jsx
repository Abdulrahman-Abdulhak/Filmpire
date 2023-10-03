import React from 'react';
import useStyles from '../styles';

import MoviesList from '../../components/Movies/MoviesList/MoviesList';

function Movies() {
  const classes = useStyles();

  return (
    <div className={classes.movies}>
      <MoviesList />
    </div>
  );
}

export default Movies;
