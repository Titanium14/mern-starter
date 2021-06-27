import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { connect } from 'react-redux';
import { login } from '../../../redux/actions/auth';

import TextFieldGroup from '../../utils/textFieldGroup';

const Login = ({ login, isAuthenticated, error }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
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
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => onSubmit(e)}
          noValidate
          sx={{ mt: 1 }}
        >
          <Grid container spacing={2}>
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
              autoFocus
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
          </Grid>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/Auth/register" variant="body2">
                Don't have an account? Sign up here
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login })(Login);
