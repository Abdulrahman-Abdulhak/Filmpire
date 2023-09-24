import { Grid, Grow, Rating, Tooltip, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

import useStyles from './styles';

function MovieCard({ movie, i }) {
  const classes = useStyles();

  return (
    <Grid className={classes.movieCard} item xs={12} sm={6} m={4} lg={3} xl={2}>
      <Grow in key={movie.id ?? i} timeout={(i + 1) * 150}>
        <Link to={`/movie/${movie.id}`} className={classes.link}>
          <img
            loading="lazy"
            alt={movie.title ?? ''}
            src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
              : 'https://www.popcorn.app/assets/app/images/placeholder-movieimage.png'
            }
          />
          <Typography className={classes.title} variant="h5">{movie.title}</Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
}

export default MovieCard;
