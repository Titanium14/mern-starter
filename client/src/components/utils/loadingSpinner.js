import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto'
  },
  progress: {
    margin: theme.spacing(2)
  }
}));

const LoadingSpinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.progress} size={480} />
    </div>
  );
};

export default LoadingSpinner;
