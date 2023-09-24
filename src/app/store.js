import { configureStore } from '@reduxjs/toolkit';

import { tmdbApi } from '../services/TMDB';
import catOrGenreReducer from '../features/currentCatOrGenre';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentCatOrGenre: catOrGenreReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});
