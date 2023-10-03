import { makeStyles } from '@mui/styles';

const imgWidth = '7rem';
export default makeStyles(() => ({
  list: {
    gridAutoFlow: 'column',
    gridTemplateColumns: `repeat(auto-fill,minmax(${imgWidth},1fr)) !important`,
    gridAutoColumns: `minmax(${imgWidth}, 1fr)`,
    overflowX: 'auto',
    gap: '1rem !important',
    width: '100%',
    maxWidth: '100%',
    '& img': {
      height: `calc(3 / 2 * ${imgWidth}) !important`,
      maxHeight: '100%',
      borderRadius: 12,
    },
  },
  listItem: {
    display: 'block !important',
  },
}));
