import React from 'react';
import { ImageList, ImageListItem, Typography } from '@mui/material';

import useStyles from './syles';
import { useGetMovieActorsQuery } from '../../services/TMDB';
import Loading from '../async/Loading';
import Error from '../async/Error';
import { URLs } from '../../constants/constants';

function MovieActors({ id }) {
  const { data, isFetching, error, refetch } = useGetMovieActorsQuery({ id });
  const classes = useStyles();

  if (isFetching) return <Loading className={classes.list} />;
  if (error) return <Error retry={refetch} />;

  const { cast } = data;
  console.log(cast);

  return (
    <ImageList className={classes.list}>
      {cast.map((actor) => (
        <ImageListItem key={actor.id} className={classes.listItem}>
          <img src={URLs.tmdbImageSrc(7 * 16, actor.profile_path, 'poster') ?? URLs.profilePlaceholder} />
          <Typography variant="body1">{actor.name}</Typography>
          <Typography variant="body1" color="GrayText">{actor.character}</Typography>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default MovieActors;
