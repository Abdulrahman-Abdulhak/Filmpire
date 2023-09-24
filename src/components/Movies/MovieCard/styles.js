import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  movieCard: {
    paddingInline: '10px',
    marginInline: '0 !important',
  },

  title: {
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    width: '230px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    margin: '0 auto',
    marginTop: '10px',
    marginBottom: 0,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  link: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    '& img': {
      height: '300px',
      borderRadius: '12px',
    },
    '&:hover img': {
      transform: 'scale(1.05)',
    },
  },
}));
