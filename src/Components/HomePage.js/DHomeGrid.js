import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from './DTopSearchBar';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: '000000',
  },
}));

export default function CenteredGrid1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >

        {/* Grid added to all the components on the home page  */}

        {/* added for maintaining spacing  */}
        <Grid item xs={12} md={12}>
          <PrimarySearchAppBar/>
        </Grid>

        
    </div>
  );
}