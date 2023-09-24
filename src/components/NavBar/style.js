import { makeStyles } from '@mui/styles';

const sideWidth = '240px';

export default makeStyles((theme) => ({
  toolbar: {
    height: '80px',
    marginLeft: sideWidth,
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  sidePaper: {
    width: sideWidth,
  },
  sideNav: {
    '& a': {
      display: 'block',
      width: '70%',
      margin: theme.spacing(2.5, 'auto'),
      '& img': {
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
      },
    },
  },
  listItem: {
    '& img': {
      height: '2em',
      width: '2em',
      objectFit: 'contain',
      objectPosition: 'center',
    },
  },
}));
