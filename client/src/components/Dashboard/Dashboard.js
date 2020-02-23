import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';

import DashboardMain from './components/dashboardMain';

const Dashboard = () => (
  <Fragment>
    <Grid item md={3} />
    <Grid item md={6}>
      <DashboardMain></DashboardMain>
    </Grid>
    <Grid item md={3} />
  </Fragment>
);

export default Dashboard;
