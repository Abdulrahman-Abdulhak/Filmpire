import { Box, Input, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import { useDispatch } from 'react-redux';

import { useDebounce } from '../../hooks/useDebounce';
import useStyles from './styles';
import { searchMovie } from '../../features/currentCatOrGenre';

function SearchField() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const delay = 500;
  const [caller] = useDebounce(() => {
    if (!query || !query.length) return;

    console.log(query);
    dispatch(searchMovie(query));
  }, delay, [query]);

  const classes = useStyles();

  const handleChange = (e) => {
    setQuery(() => e.target.value.trim());
  };

  const handeKeyDown = (e) => {
    if (e.key.toLowerCase() === 'enter') {
      caller();
    }
  };

  return (
    <Box display="flex" justifyContent="center" className={classes.inputContainer}>
      <Input
        className={classes.input}
        variant="standard"
        value={query}
        startAdornment={(
          <InputAdornment position="start" onClick={caller}>
            <Search />
          </InputAdornment>
      )}
        inputProps={{
          onChange: handleChange,
          onKeyDown: handeKeyDown,
        }}
      />
    </Box>
  );
}

export default SearchField;
