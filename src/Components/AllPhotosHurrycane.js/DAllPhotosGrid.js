import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// Used the component for back button
import ContainedButtons from './BackButtonAllPhotos';
// Used the component for displaying all the images on the page along with showing who has uploaded it
import { Paper, Typography } from '@material-ui/core';
import SingleLineImageList from './DImageList1';
import SingleLineImageList1 from './DImageList2';
import SingleLineImageList2 from './DImageList3';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(1),
    textAlign: 'left',
    // customised color of text 
    color: '#F2635C',
    fontSize: '25px'


  },
}));

export default function CenteredGrid9() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


      {/* grid added */}
      <Grid container spacing={2}
        
        
      >



        {/* component for back button */}
        <Grid item xs={1} md={1}>
          <ContainedButtons />
        </Grid>


        {/* component for heading text */}
        <Grid item xs={9} md={9}>
          {/* Paper added for adding text */}
          <Typography className={classes.paper}>
            All Photos
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={12}>
          <Paper square elevation={0} className={classes.paper}></Paper>
          <Paper square elevation={0} className={classes.paper}></Paper>
        </Grid>

        {/* component for the images' */}
        <Grid item xs={12} md={12}>
          <SingleLineImageList />
        </Grid>

        {/* component for the images' */}
        <Grid item xs={12} md={12}>
          <SingleLineImageList1 />
        </Grid>

        {/* component for the images' */}
        <Grid item xs={12} md={12}>
          <SingleLineImageList2 />
        </Grid>
      </Grid>
    </div>
  );
}
