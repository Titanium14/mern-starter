import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button } from '@material-ui/core';

import Welcome from './components/welcome';

const useStyles = makeStyles({
  margin: {
    marginTop: '24px',
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item xs={12}>
        <Welcome />
      </Grid>
      <Grid item xs={12}>
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
