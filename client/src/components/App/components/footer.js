import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(3, 0)
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.margin}>
      <Typography variant="subtitle2" component="p" align="center">
        Copyright &copy; 2019 MERN Starter
      </Typography>
    </footer>
  );
};

export default Footer;
