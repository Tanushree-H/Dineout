import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// Used the component for adding images of the restaurant
import SwipeableTextMobileStepper from './ImagesRestaurantMain';
// Used the component for tabs in the restaurant page 
import SimpleTabs from './TabsRestaurantMain';
// Used the component for adding buttons
import FloatingActionButtons from './ReserveTableandI';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // color modified 
    color: '#000000',
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
        <Grid item xs={12} md={12}>
          {/* component for the initial images of the restaurant*/}
          <SwipeableTextMobileStepper />
        </Grid>
        <Grid item xs={12} md={12}>
          {/* component for the tabs of 'overview' , 'menu' and 'review'*/}
          <SimpleTabs />
        </Grid> 
        {/* <Hidden xsUp> */}
          {/* 'the reserve a table' and 'i' button was called here*/}
        <FloatingActionButtons/>
        {/* </Hidden> */}
      </Grid>
      
    </div>
  );
}

