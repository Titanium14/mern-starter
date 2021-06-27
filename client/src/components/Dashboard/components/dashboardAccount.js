import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Grid } from '@material-ui/core';
import { connect } from 'react-redux';

import TextFieldGroup from '../../utils/textFieldGroup';

import { updateUser } from '../../../redux/actions/auth';

const DashboardAccount = ({ auth: { user }, error, updateUser }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    password: '',
    password2: '',
    passConfirmed: '',
  });

  const { name, email, password, password2, passConfirmed } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setFormData({ ...formData, passConfirmed: 'Passwords do not match' });
    } else {
      setFormData({ ...formData, passConfirmed: '' });
      updateUser(name, email, password);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={(e) => onSubmit(e)}
      noValidate
      sx={{ mt: 1 }}
    >
      <Grid container spacing={2}>
        <TextFieldGroup
          id="name"
          name="name"
          label="Full Name"
          value={name}
          variant="outlined"
          autoComplete="name"
          errorMsg={error.name}
          onChange={(e) => onChange(e)}
          required
          fullWidth
          autoFocus
        />
        <TextFieldGroup
          id="email"
          name="email"
          label="Email Address"
          value={email}
          variant="outlined"
          autoComplete="email"
          errorMsg={error.email}
          onChange={(e) => onChange(e)}
          required
          fullWidth
        />
        <TextFieldGroup
          id="password"
          name="password"
          label="Password"
          value={password}
          variant="outlined"
          type="password"
          autoComplete="current-password"
          errorMsg={error.password}
          onChange={(e) => onChange(e)}
          required
          fullWidth
        />
        <TextFieldGroup
          id="password2"
          name="password2"
          label="Confirm Password"
          value={password2}
          variant="outlined"
          type="password"
          autoComplete="confirm-password"
          errorMsg={passConfirmed}
          onChange={(e) => onChange(e)}
          required
          fullWidth
        />
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Update Account
      </Button>
    </Box>
  );
};

DashboardAccount.propTypes = {
  updateUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error,
});

export default connect(mapStateToProps, { updateUser })(DashboardAccount);
