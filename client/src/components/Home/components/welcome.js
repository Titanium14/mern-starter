import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(8, 2)
  }
}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h1" component="h1" align="center">
        Welcome to MERN Starter!
      </Typography>
      <Typography variant="h5" component="p" align="center">
        Enjoy the power of a JS web stack!
      </Typography>
    </Paper>
  );
};

export default Welcome;
