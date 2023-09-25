import { configureStore } from '@reduxjs/toolkit';

import { tmdbApi } from '../services/TMDB';
import catOrGenreReducer from '../features/currentCatOrGenre';
import userReducer from '../features/auth';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentCatOrGenre: catOrGenreReducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});
