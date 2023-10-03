import { makeStyles } from '@mui/styles';

const padding = '2rem';

export default makeStyles((theme) => ({
  posterContainer: {
    padding,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
  },
  poster: {
    width: '100%',
    maxWidth: 500,
    borderRadius: 16,
    display: 'flex',
    boxShadow: '.5rem 1rem 1rem rgba(0, 0, 0, .7)',
  },
  information: {
    padding,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    maxWidth: '100%',
    gap: theme.spacing(3),
  },
  genre: {
    paddingInline: '1rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '& div': {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
    },
    '& img': {
      height: '2rem',
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingInline: padding,
    width: '100%',
  },
  buttonGroup: {
    '&:empty': {
      display: 'none',
    },
  },
}));
