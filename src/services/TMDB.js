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
      query: ({ catNameOrGenreId, page }) => {
        if (catNameOrGenreId && typeof catNameOrGenreId === 'string') {
          return `movie/${catNameOrGenreId}?page=${page}`;
        }

        if (catNameOrGenreId && typeof catNameOrGenreId === 'number') {
          return `discover/movie?with_genres=${catNameOrGenreId}&page=${page}`;
        }

        return `movie/popular?page=${page}`;
      },
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetGenresQuery,
} = tmdbApi;
