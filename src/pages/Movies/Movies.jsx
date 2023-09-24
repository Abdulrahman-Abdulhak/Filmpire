import React from 'react';
import useStyles from '../styles';

import { MoviesList } from '../../components/Movies';

function Movies() {
  const classes = useStyles();

  return (
    <div className={classes.movies}>
      <MoviesList />
    </div>
  );
}

export default Movies;
