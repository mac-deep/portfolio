import { makeStyles } from '@material-ui/core';
import { outerShadow, innerShadow } from '../../Theme/Colors';

export default makeStyles((theme) => ({
  homepage: {
    background: theme.palette.background.default,
    minHeight: '100vh',
    zIndex: 10,

    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  fullHeight: {
    zIndex: 10,
    height: '100vh',
  },
  profileImg: {
    width: theme.spacing(50),
    height: theme.spacing(50),
    [theme.breakpoints.down('md')]: {
      width: theme.spacing(40),
      height: theme.spacing(40),
    },
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  },
  imageBox: {
    boxShadow: innerShadow,
    padding: '15px',
    zIndex: 10,
    marginBottom: '10px',
    borderRadius: '50%',
    background: theme.palette.background.default,
  },
  outershadow: {
    padding: '10px',
    borderRadius: '50%',
    boxShadow: outerShadow,
    background: theme.palette.background.default,
  },
  menuBtn: {
    position: 'fixed',
    top: '30px',
    right: '30px',
    color: 'white',
    '&:hover': {
      color: 'white',
    },
  },
  effects: {
    zIndex: '50',
  },
  info: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '-120px',
    },
  },
}));
