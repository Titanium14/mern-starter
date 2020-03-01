import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardHeader,
  Menu,
  MenuItem
} from '@material-ui/core';
import { connect } from 'react-redux';
import moment from 'moment';

import DashboardAccount from './dashboardAccount';
import DashboardDelete from './dashboardDelete';
import {
  userAvatar,
  userAction,
  userContent,
  userSubheader,
  userTitle
} from '../utils/skeletonElems';
import { useStyles } from '../utils/styles';

const DashboardMain = ({ auth: { user, loading } }) => {
  const [action, setAction] = useState('view');
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpen = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  const handleClick = e => setAnchorEl(e.currentTarget);

  const handleOptionClose = e => {
    setAnchorEl(null);
    const id = e.target.id;
    if (id === 'view' || id === 'update') setAction(id);
    else handleClickOpen();
  };

  const classes = useStyles();

  const avatar = user && user.avatar ? user.avatar : null;
  const name = user && user.name ? user.name : 'N/A';
  const joined =
    user && user.date
      ? `First joined: ${moment(user.date).format('YYYY/MM/DD @ HH:mm:ss')}`
      : 'N/A';

  return (
    <Fragment>
      <Card className={classes.card}>
        <CardHeader
          avatar={userAvatar(loading, avatar)}
          action={userAction(loading, handleClick)}
          title={userTitle(loading, name)}
          subheader={userSubheader(loading, joined)}
        />
        <CardContent>
          {action === 'view' ? (
            userContent(loading, name)
          ) : (
            <DashboardAccount />
          )}
        </CardContent>
      </Card>
      <Menu
        id="dashboard-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleOptionClose}
      >
        <MenuItem id="view" onClick={e => handleOptionClose(e)}>
          View Dashboard
        </MenuItem>
        <MenuItem id="update" onClick={e => handleOptionClose(e)}>
          Update Account
        </MenuItem>
        <MenuItem id="delete" onClick={e => handleOptionClose(e)}>
          Delete Account
        </MenuItem>
      </Menu>
      {open ? (
        <DashboardDelete open={open} handleDialogClose={handleDialogClose} />
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};

DashboardMain.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(DashboardMain);
