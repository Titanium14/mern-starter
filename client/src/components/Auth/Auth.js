import React from 'react';
import Grid from '@material-ui/core/Grid';

import Login from './components/login';
import Register from './components/register';

const Auth = props => (
  <Grid container direction="row">
    <Grid item md={4} />
    <Grid item md={4}>
      {props.location.pathname === '/Auth/login' ? <Login /> : <Register />}
    </Grid>
    <Grid item md={4} />
  </Grid>
);

export default Auth;
