import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { Provider } from 'react-redux';

import store from './app/store';
import App from './App.jsx';

const theme = createTheme({});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
