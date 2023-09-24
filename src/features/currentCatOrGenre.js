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
    },
  },
});

export const { selectCatOrGenre } = catOrGenre.actions;

export default catOrGenre.reducer;
