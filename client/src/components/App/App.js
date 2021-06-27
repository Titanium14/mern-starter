import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import Home from '../Home/Home';
import Auth from '../Auth/Auth';
import Dashboard from '../Dashboard/Dashboard';

import Footer from './components/footer';

import LoadingSpinner from '../utils/loadingSpinner';
import PrivateRoute from '../utils/privateRoute';

const App = () => (
  <Router>
    <Fragment>
      <Grid container direction="row">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Auth/login" component={Auth} />
          <Route exact path="/Auth/register" component={Auth} />
          <PrivateRoute exact path="/Dashboard" component={Dashboard} />
          <Route render={() => <LoadingSpinner />} />
        </Switch>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Fragment>
  </Router>
);

export default App;
