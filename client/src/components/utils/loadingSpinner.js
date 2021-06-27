import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
  },
  progress: {
    margin: '16px',
  },
});

const LoadingSpinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.progress} size={480} />
    </div>
  );
};

export default LoadingSpinner;
