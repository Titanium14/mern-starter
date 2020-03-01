import React, { Fragment } from 'react';
import { Avatar, CardMedia, IconButton, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton';

export const userAvatar = (loading, image) => {
  return loading ? (
    <Skeleton animation="wave" variant="circle" width={40} height={40} />
  ) : (
    <Avatar alt="Artist avatar" src={image} />
  );
};

export const userAction = (loading, handleClick) => {
  return loading ? null : (
    <IconButton aria-label="settings" onClick={handleClick}>
      <MoreVertIcon />
    </IconButton>
  );
};

export const userTitle = (loading, title) => {
  return loading ? (
    <Skeleton
      animation="wave"
      height={10}
      width="80%"
      style={{ marginBottom: 6 }}
    />
  ) : (
    title
  );
};

export const userSubheader = (loading, sub) => {
  return loading ? <Skeleton animation="wave" height={10} width="40%" /> : sub;
};

export const userMedia = (loading, useClass, image, title) => {
  return loading ? (
    <Skeleton animation="wave" variant="rect" className={useClass} />
  ) : (
    <CardMedia className={useClass} image={image} title={title} />
  );
};

export const userContent = (loading, name) => {
  const welcomeText = `Hello, ${name}! This is your dashboard!`;
  return loading ? (
    <Fragment>
      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
      <Skeleton animation="wave" height={10} width="80%" />
    </Fragment>
  ) : (
    <Typography variant="body1" color="textPrimary" component="p">
      {welcomeText}
    </Typography>
  );
};
