import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class LocaleSelect extends Component {
  propTypes = {
    classes: PropTypes.object.isRequired,
  }
  constructor (props) {
    super(props)

    this.state = {
      name: null
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render () {
    const {
      classes,
      ...props
    } = this.props
    const {
      name
    } = this.state

    return (
      <div className={classes.root} {...props}>
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
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
  }
}

export default withStyles(styles)(LocaleSelect);
