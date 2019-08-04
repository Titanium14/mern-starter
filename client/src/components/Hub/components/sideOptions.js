import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core';

import { connect } from 'react-redux';
import { logout } from '../../../redux/actions/auth';

import { objNavOptions } from '../../utils/objectGenerator';

const ListItemLink = props => <ListItem button component="a" {...props} />;

const SideOptions = ({
  auth: { isAuthenticated },
  drawerPos,
  icons,
  list,
  hRefs,
  logout
}) => {
  const objList =
    drawerPos === 'first'
      ? objNavOptions(icons, list, hRefs)
      : isAuthenticated
      ? objNavOptions(icons[0], list[0], hRefs[0])
      : objNavOptions(icons[1], list[1], hRefs[1]);
  return (
    <Fragment>
      <Divider />
      <List>
        {objList.map(ol => {
          const Icon = ol.icon;
          return (
            <ListItemLink
              href={ol.link}
              key={ol.name}
              onClick={ol.name === 'Logout' ? logout : null}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={ol.name} />
            </ListItemLink>
          );
        })}
      </List>
    </Fragment>
  );
};

SideOptions.propTypes = {
  auth: PropTypes.object.isRequired,
  drawerPos: PropTypes.string.isRequired,
  icons: PropTypes.array.isRequired,
  list: PropTypes.array.isRequired,
  hRefs: PropTypes.array.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(SideOptions);
