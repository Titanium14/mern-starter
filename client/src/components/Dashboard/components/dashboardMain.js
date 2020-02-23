import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { connect } from 'react-redux';
import moment from 'moment';

import {
  userAvatar,
  userAction,
  userContent,
  userSubheader,
  userTitle
} from '../utils/skeletonElems';
import { useStyles } from '../utils/styles';

const DashboardMain = ({ auth: { user, loading } }) => {
  const classes = useStyles();

  const avatar = user && user.avatar ? user.avatar : null;
  const name = user && user.name ? user.name : 'N/A';
  const joined =
    user && user.date
      ? `First joined: ${moment(user.date).format('YYYY/MM/DD @ HH:mm:ss')}`
      : 'N/A';

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={userAvatar(loading, avatar)}
        action={userAction(loading)}
        title={userTitle(loading, name)}
        subheader={userSubheader(loading, joined)}
      />
      <CardContent>{userContent(loading, name)}</CardContent>
    </Card>
  );
};

DashboardMain.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(DashboardMain);
