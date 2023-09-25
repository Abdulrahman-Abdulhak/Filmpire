import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  inputContainer: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: '-10px 0 10px',
    },
  },
  input: {
    color: theme.palette.mode === 'light' && 'black',
    filter: theme.palette.mode === 'light' && 'invert(100%)',
  },
}));
