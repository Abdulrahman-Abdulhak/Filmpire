import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../../services/TMDB';

import MovieCard from '../MovieCard/MovieCard';
import useStyles from './styles';
import Loading from '../../async/Loading';
import Error from '../../async/Error';

function MoviesList() {
  const [page, setPage] = useState(1);
  const { catNameOrGenreId, searchQuery } = useSelector((store) => store.currentCatOrGenre);
  const { data, error, isFetching, refetch } = useGetMoviesQuery({ catNameOrGenreId, page, searchQuery });

  const classes = useStyles();

  if (isFetching) return <Loading />;

  if (error) return <Error retry={refetch} />;

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
