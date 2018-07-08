import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ProjectList from '../components/ProjectList';
import UserList from '../components/UserList';

const styles = theme => ({
  root: {
    width: '100%',
    height: 'calc(100vh - 64px)',
    backgroundColor: theme.palette.background.primary,
  },
  column: {
    height: 'calc(100vh - 64px)',
    minHeight: '400px',
    display: 'flex',
  }
});

const Dashboard = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <div className={classes.column}>
            <ProjectList />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.column}>
            <UserList />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles)
)(Dashboard);
