import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from './TopSearchBarHome';
import SwipeableTextMobileStepper from './AdvertisementsHome';
import TextMobileStepper1 from './BestOffers';
import TextMobileStepper2 from './RestaurantsNearYou';
import SingleLineImageList from './TopPicks';
import TextMobileStepper3 from './SuperSavers';
import SimpleBottomNavigation from './BottomNavigation';

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
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <PrimarySearchAppBar/>
        </Grid>
        <Grid item xs={12}>
          <SwipeableTextMobileStepper/>
        </Grid>
        <Grid item xs={12}>
          <TextMobileStepper1/>
        </Grid>
        <Grid item xs={12}>
          <TextMobileStepper2/>
        </Grid>
        <Grid item xs={12}>
          <SingleLineImageList/>
        </Grid>
        <Grid item xs={12}>
          <TextMobileStepper3/>
        </Grid>
      </Grid>
    </div>
  );
}
