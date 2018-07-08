import React from 'react';
import Grid from '@material-ui/core/Grid';

import LocaleList from './editorScreen/LocaleList';
import TokenList from './editorScreen/TokenList';

const EditorScreen = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <LocaleList />
      </Grid>
      <Grid item xs={3}>
        <TokenList />
      </Grid>
    </Grid>
  );
};

export default EditorScreen;
