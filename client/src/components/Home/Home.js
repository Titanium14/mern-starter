import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

import Welcome from './components/welcome';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(3, 0)
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item md={12}>
        <Welcome />
      </Grid>
      <Grid item md={12}>
        <Button
          variant="contained"
          size="large"
          color="primary"
          fullWidth
          className={classes.margin}
        >
          Sample Text
        </Button>
      </Grid>
    </Fragment>
  );
};

export default Home;
