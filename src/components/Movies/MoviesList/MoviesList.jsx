import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../../services/TMDB';

import { MovieCard } from '..';
import useStyles from './styles';

function MoviesList() {
  const [page, setPage] = useState(1);
  const { catNameOrGenreId } = useSelector((store) => store.currentCatOrGenre);
  const { data, error, isFetching, refetch } = useGetMoviesQuery({ catNameOrGenreId, page });

  const classes = useStyles();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <Typography variant="subtitle1">Something went wrong</Typography>
        <Button onClick={refetch}>Try Again</Button>
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="grid" justifyItems="center" alignItems="center" height="100%">
        <Typography variant="body1">
          We couldn&apos;t find any movies to show you.<br />
          Please Search Something Else!
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container className={classes.moviesList}>
      {data.results.map((movie, i) => (
        <MovieCard key={movie.id ?? i} movie={movie} i={i} />
      ))}
    </Grid>
  );
}

export default MoviesList;
