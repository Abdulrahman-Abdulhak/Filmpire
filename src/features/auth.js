import { createSlice } from '@reduxjs/toolkit';
import { clone } from '../utils/object';

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

      newState.user = action.payload;
      newState.isAuthenticated = true;
      newState.sessionId = localStorage.getItem('session_id');
    },
    logout: (state) => {
      localStorage.removeItem('request_token');
      localStorage.removeItem('session_id');

      clone(initialState, state);
    },
  },
});

export const { setUser, logout } = auth.actions;

export default auth.reducer;

export const userSelector = (store) => store.user;
