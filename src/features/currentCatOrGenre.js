import { createSlice } from '@reduxjs/toolkit';

export const catOrGenre = createSlice({
  name: 'catOrGenre',
  initialState: {
    catNameOrGenreId: '',
    searchQuery: '',
    page: 1,
  },
  reducers: {
    selectCatOrGenre: (state, action) => {
      const newState = state;
      newState.catNameOrGenreId = action.payload;
      newState.searchQuery = '';
    },
    searchMovie: (state, action) => {
      const newState = state;
      newState.searchQuery = action.payload;
      newState.catNameOrGenreId = '';
    },
  },
});

export const { selectCatOrGenre, searchMovie } = catOrGenre.actions;

export default catOrGenre.reducer;
