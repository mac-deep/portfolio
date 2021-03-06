import React from 'react';
import { CssBaseline, Dialog, Slide } from '@material-ui/core';
import { Link, Route, Switch } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';

import HomePage from './Pages/HomePage/HomePage';
import ContactPage from './Pages/ContactPage/ContactPage';
import AboutMe from './Pages/AboutMe/AboutMe';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import Admin from './Pages/Admin/Admin';

import Navbar from './Components/Navbar/Navbar';
import Auth from './Components/Auth/Auth';

import CustomIconButton from './CustomUI/CustomIconButton';
import { withTheme } from './Theme/Theme';
import './App.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function App() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <Link to="/">
        <CustomIconButton color="primary" disableFocusRipple className="homeBtn">
          <HomeIcon />
        </CustomIconButton>
      </Link>
      <CustomIconButton disableFocusRipple className="menuBtn" color="primary" onClick={handleOpen}>
        <MenuIcon />
      </CustomIconButton>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <Navbar handleClose={handleClose} />
      </Dialog>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/admin" component={Admin} />
        {/* <Route exact path="/admin/projects" component={Projects} /> */}
      </Switch>
    </>
  );
}

export default withTheme(App);
