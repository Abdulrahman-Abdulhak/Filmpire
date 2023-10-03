import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, ButtonGroup, Button, Typography, Grid, useMediaQuery } from '@mui/material';
import { Language, Movie, LocalMovies } from '@mui/icons-material';

import { useSelector } from 'react-redux';
import { useGetMovieDetailsQuery } from '../../services/TMDB';
import Loading from '../../components/async/Loading';
import Error from '../../components/async/Error';

import useStyles from './styles';
import { languageName } from '../../constants/languages';
import Rating from '../../components/Rating/Rating';
import { monthsShort } from '../../constants/date';
import genreIcons from '../../assets/cat_genre';
import MovieActors from '../../components/Actors/MovieActors';
import { userSelector } from '../../features/auth';

function MovieInformation() {
  const { id } = useParams();
  const { data, isFetching, error, refetch } = useGetMovieDetailsQuery({ id });
  const sm = useMediaQuery('(width < 1200px)');
  const classes = useStyles();

  const userStore = useSelector(userSelector);

  console.log(userStore.user);

  if (isFetching) return <Loading />;

  if (error) return <Error retry={refetch} />;

  const movieImg = sm ? data.backdrop_path : data.poster_path;
  const releaseDate = new Date(data.release_date);

  const vote = data.vote_average;
  const duration = data.runtime;
  const month = monthsShort[releaseDate.getMonth()];
  const day = releaseDate.getDay();
  const year = releaseDate.getFullYear();
  const language = languageName(data.original_language);

  const { genres, overview, homepage } = data;
  const imdbId = data.imdb_id;

  return (
    <Box>
      <Grid container className={classes.header}>
        <Grid item sm={12} lg={4} className={classes.posterContainer}>
          <img
            className={classes.poster}
            src={`https://image.tmdb.org/t/p/w500${movieImg}`}
            alt={`${data.title}'s poster`}
          />
        </Grid>
        <Grid item sm={12} lg={8} className={classes.information} flexDirection="column">
          <Typography variant="h3">{data.title} ({year})</Typography>
          <Typography variant="h5">{data.tagline}</Typography>
          <Box
            paddingInline="1rem"
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            <Box display="flex" gap={1} flexWrap="wrap">
              <Rating
                readOnly
                value={vote / 2}
                precision={0.1}
              />
              <Typography variant="body1">{vote} / 10</Typography>
            </Box>
            <Typography variant="h6">{duration}min / {month} {day} {year} / {language}</Typography>
          </Box>
          <Box
            className={classes.genre}
            display="flex"
            gap="1rem"
            flexWrap="wrap"
          >
            {genres.map(({ name, index }) => (
              <div key={`${name}:${index}`}>
                <img src={genreIcons[name.toLowerCase()]} alt="" />
                {name}
              </div>
            ))}
          </Box>
          <Box alignSelf="flex-start">
            <Typography variant="h5">Overview</Typography>
            <Typography marginTop={1} variant="body1">{overview}</Typography>
          </Box>
          <Box alignSelf="flex-start" width="100%">
            <Typography variant="h5">Top Cast</Typography>
            <MovieActors id={id} />
          </Box>
        </Grid>
        <Grid item lg={12} className={classes.buttons}>
          <ButtonGroup variant="outlined" className={classes.buttonGroup}>
            {homepage ? (
              <Button
                href={homepage}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<Language />}
              >Website
              </Button>
            ) : null}
            {imdbId ? (
              <Button
                href={`https://imdb.com/title/${imdbId}`}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<Movie />}
              >IMDB
              </Button>
            ) : null}
            <Button endIcon={<LocalMovies />}>Trailler</Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined" className={classes.buttonGroup}>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MovieInformation;
