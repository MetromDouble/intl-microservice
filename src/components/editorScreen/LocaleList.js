import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    height: 'calc(100vh - 64px)',
    backgroundColor: theme.palette.background.primary,
  },
});

const LocaleList = ({ classes, ...props }) => (
  <div className={classes.root} {...props}>
    <List component="nav">
      <ListItem button>
        <ListItemText primary="en-US" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="en-GB" />
      </ListItem>
    </List>
  </div>
);

LocaleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LocaleList);
