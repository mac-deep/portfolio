import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  navbar: {
    position: 'fixed',
    zIndex: '100',
    top: '0',
    left: '0',
    background: theme.palette.background.default,
    width: '100vw',
    height: '100vh',
    overflowY: 'scroll',
  },
  navlist: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  closeBtn: {
    position: 'fixed',
    top: '30px',
    right: '30px',
  },
  copyright: {
    position: 'absolute',
    top: '50%',
    left: -60,
    transform: 'translateY(-50%) rotate(-90deg)',
  },
}));
