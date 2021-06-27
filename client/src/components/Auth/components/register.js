import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { connect } from 'react-redux';
import { register } from '../../../redux/actions/auth';

import TextFieldGroup from '../../utils/textFieldGroup';

const Register = ({ register, isAuthenticated, error }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      register(name, email, password);
    }
  };

  if (isAuthenticated) return <Redirect to="/Dashboard" />;

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
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
              helperText="This site uses Gravatar so if you want a profile image, use a Gravatar email"
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container direction="row-reverse">
            <Grid item>
              <Link href="/Auth/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register })(Register);
