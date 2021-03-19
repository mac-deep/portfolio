import { makeStyles } from '@material-ui/core';
import { outerShadow } from '../../Theme/Colors';

export default makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    boxShadow: outerShadow,
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  media: {
    height: 150,
    margin: 10,
    borderRadius: 5,
    // transition: 'all 0.3s ease',
    // '&:hover': {
    //   transform: 'scale(1.05)',
    // },
  },
}));
