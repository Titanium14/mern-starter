import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import { connect } from 'react-redux';

import { deleteUser } from '../../../redux/actions/auth';

const DashboardDelete = ({ open, handleDialogClose, deleteUser }) => {
  const onDelete = () => deleteUser();

  return (
    <Dialog
      open={open}
      onClose={handleDialogClose}
      aria-labelledby="delete-dialog-title"
      aria-describedby="delete-dialog-description"
    >
      <DialogTitle id="delete-dialog-title">
        {'Delete your account?'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="delete-dialog-description">
          Once deleted, you will not be able to recover your account. Do you
          still want to continue?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onDelete} color="secondary" autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DashboardDelete.propTypes = {
  deleteUser: PropTypes.func.isRequired
};

export default connect(null, { deleteUser })(DashboardDelete);
