import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  main: {
    paddingTop: '80px',
    paddingLeft: '240px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
    },
  },
  movies: {
    margin: '10px',
    marginBottom: 0,
  },
}));
