import React, { Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Dashboard = ({ auth: { user, loading } }) => (
  <Fragment>
    <Grid item md={1} />
    <Grid item md={10}>
      <Typography variant="h1" component="h1" align="center">
        {!loading && user ? `Welcome, ${user.name}` : ''}
      </Typography>
    </Grid>
    <Grid item md={1} />
  </Fragment>
);

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
