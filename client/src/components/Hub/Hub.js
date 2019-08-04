import React, { useEffect } from 'react';
import clsx from 'clsx';

import { useTheme } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton
} from '@material-ui/core';

import { Provider } from 'react-redux';
import store from '../../redux/store';
import { loadUser } from '../../redux/actions/auth';
import setAuthToken from '../../redux/utils/setAuthToken';

import App from '../App/App';
import SideOptions from './components/sideOptions';
import { useStyles } from './utils/styles';
import {
  MenuIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  navIcons,
  navList,
  navRefs,
  condIcons,
  condList,
  condRefs
} from './utils/icons.js';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const MiniDrawer = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Provider store={store}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              MERN Starter
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
          open={open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <SideOptions
            drawerPos="first"
            icons={navIcons}
            list={navList}
            hRefs={navRefs}
          />
          <SideOptions
            drawerPos="second"
            icons={condIcons}
            list={condList}
            hRefs={condRefs}
          />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <App />
        </main>
      </div>
    </Provider>
  );
};

export default MiniDrawer;
