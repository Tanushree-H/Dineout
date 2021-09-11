import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
          <Hidden mdDown>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>logo</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper className={classes.paper}>navigation</Paper>
        </Grid>
        <Grid item xs={12} md={12}>
          <Paper className={classes.paper}>carousel</Paper>
        </Grid>
        </Hidden>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>feature</Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>feature</Paper>
        </Grid>
        <Grid item xs={12} md={4}> 
          <Paper className={classes.paper}>feature</Paper>
        </Grid>
        <Grid item xs={12} md={12}>
          <Paper className={classes.paper}>footer</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
