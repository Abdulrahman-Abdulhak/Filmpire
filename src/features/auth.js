import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isAuthenticated: false,
  sessionId: '',
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const newState = state;

      newState.user = action.payload.user;
      newState.isAuthenticated = true;
      newState.sessionId = localStorage.getItem('session_id');
    },
  },
});

export const { setUser } = auth.actions;

export default auth.reducer;

export const userSelector = (store) => store.user;
