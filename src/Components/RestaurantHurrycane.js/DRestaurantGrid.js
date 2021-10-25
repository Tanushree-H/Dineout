import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// Used the component for adding images of the restaurant
import SwipeableTextMobileStepper from './DImagesRestaurantMain';
// Used the component for tabs in the restaurant page 
import SimpleTabs from './DTabsRestaurantMain';
// Used the component for adding buttons
import PrimarySearchAppBar1 from '../HomePage.js/DTopSearchBar';
import ScrollableTabsButtonAuto from '../HomePage.js/Dtabs';
import SimpleCard from '../HomePage.js/footer';
import { Paper, Typography } from '@material-ui/core';
import SingleLineImageList from './DYouMayAlsoLike';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    // color modified 
    color: '#000000',
    fontSize: '25px',



  },
}));

export default function CenteredGrid2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={5}
      // direction="column"
      // alignItems="center"
      // justify="center"
      // style={{ minHeight: '100vh' }}
      >
        <Grid item md={12}>
          <PrimarySearchAppBar1 />
        </Grid>

        <Grid item xs={12} md={12}>
          <Paper square elevation={0} className={classes.paper}></Paper>
          <Paper square elevation={0} className={classes.paper}></Paper>
        </Grid>

        <Grid item xs={12} md={12}>
          <ScrollableTabsButtonAuto />
        </Grid>


        <Grid item md={6}>
          {/* component for the initial images of the restaurant*/}
          <SwipeableTextMobileStepper />
        </Grid>
        <Grid item md={6}>
          {/* component for the tabs of 'overview' , 'menu' and 'review'*/}
          <SimpleTabs />
        </Grid>

        <Grid item md={12}>
          <Paper square elevation={0} className={classes.paper}>You may also like</Paper>
        </Grid>

        <Grid item md={12}>
          {/* component for the tabs of You may also like*/}
          <SingleLineImageList />
        </Grid>

        <Grid item md={12}>
          {/* component for the tabs of footer*/}
          <SimpleCard />
        </Grid>

      </Grid>

    </div>
  );
}

