import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  margin: {
    margin: '24px 0',
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.margin}>
      <Typography variant="subtitle2" component="p" align="center">
        {`Copyright © ${new Date().getFullYear()}`} MERN Starter
      </Typography>
    </footer>
  );
};

export default Footer;
