import React, { useEffect } from 'react';

import { useTheme } from '@material-ui/core/styles';
import {
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';

import { Provider } from 'react-redux';
import store from '../../redux/store';
import { loadUser } from '../../redux/actions/auth';
import setAuthToken from '../../redux/utils/setAuthToken';

import App from '../App/App';
import SideOptions from './components/sideOptions';
import { DrawerHeader, AppBar, Drawer } from './utils/styles';
import {
  MenuIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  navIcons,
  navList,
  navRefs,
  condIcons,
  condList,
  condRefs,
} from './utils/icons.js';

if (localStorage.token) setAuthToken(localStorage.token);

const MiniDrawer = () => {
  useEffect(() => store.dispatch(loadUser()), []);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Provider store={store}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              MERN Starter
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
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
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <App />
        </Box>
      </Box>
    </Provider>
  );
};

export default MiniDrawer;
