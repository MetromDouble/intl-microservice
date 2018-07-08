import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '50%',
    minWidth: '360px',
    margin: 'auto',
    padding: '12px',
    boxSizing: 'border-box',
  },
  textField: {
    width: 'calc(100% - 24px)',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

const UserList = ({ classes }) => {
  return (
    <Paper className={classes.root} square>
      <Typography variant="title" color="inherit" className={classes.flex} align="center">
        Users
      </Typography>
      <TextField
        id="search-project"
        label="Search project"
        className={classes.textField}
        // value={name}
        // onChange={this.handleChange('name')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        margin="normal"
      />
      <List component="nav">
        <ListItem button>
          <ListItemText primary="One" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Two" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Three" />
        </ListItem>
      </List>
    </Paper>
  );
};

UserList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles)
)(UserList);
