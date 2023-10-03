import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = import.meta.env.VITE_API_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${tmdbApiKey}`);
      headers.set('accept', 'application/json');

      return headers;
    },
    method: 'GET',
  }),
  endpoints: (builder) => ({
    getGenres: builder.query({
      query: () => 'genre/movie/list',
    }),
    getMovies: builder.query({
      query: ({ catNameOrGenreId, page, searchQuery }) => {
        if (searchQuery) {
          return `search/movie?query=${searchQuery}&page=${page}`;
        }

        if (catNameOrGenreId && typeof catNameOrGenreId === 'string') {
          return `movie/${catNameOrGenreId}?page=${page}`;
        }

        if (catNameOrGenreId && typeof catNameOrGenreId === 'number') {
          return `discover/movie?with_genres=${catNameOrGenreId}&page=${page}`;
        }

        return `movie/popular?page=${page}`;
      },
    }),
    getMovieDetails: builder.query({
      query: ({ id }) => `movie/${id}`,
    }),
    getMovieActors: builder.query({
      query: ({ id }) => `https://api.themoviedb.org/3/movie/${id}/credits`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetMovieDetailsQuery,
  useGetMovieActorsQuery,
} = tmdbApi;
