import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  CssBaseline,
  Link,
  Grid,
  Typography,
  Container,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { connect } from 'react-redux';
import { login } from '../../../redux/actions/auth';

import { useStyles } from '../utils/styles';
import TextFieldGroup from '../../utils/textFieldGroup';

const Login = ({ login, isAuthenticated, error }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  const classes = useStyles();

  if (isAuthenticated) return <Redirect to="/Dashboard" />;

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={e => onSubmit(e)} noValidate>
          <Grid container spacing={2}>
            <TextFieldGroup
              id="email"
              name="email"
              label="Email Address"
              value={email}
              variant="outlined"
              autoComplete="email"
              errorMsg={error.email}
              onChange={e => onChange(e)}
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
              onChange={e => onChange(e)}
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
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/Auth/register" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
