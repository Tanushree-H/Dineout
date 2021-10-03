import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// Used the component for the search bar at the top
import PrimarySearchAppBar from './TopSearchBarHome'
// Used the component for the advertisement carousel. Used the automatic swipe because they are advertisements and hence need to swipe automatically
import SwipeableTextMobileStepper from './AdvertisementsHome';
// Used the components for adding the carousels for the various restaurants and offers
import TextMobileStepper1 from './BestOffers';
import TextMobileStepper2 from './RestaurantsNearYou';
import SingleLineImageList from './TopPicks';
// Used the component for adding images in a single line
import TextMobileStepper3 from './SuperSavers';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}
      direction= "column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
>
        <Grid item xs={12} md={12}>
        </Grid>
        <Grid item xs={12} md={12}>
             {/* Component for advertisements */}
          <SwipeableTextMobileStepper/>
        </Grid>
        <Grid item xs={12} md={12}>
          {/* component for the 'best offers'*/}
          <TextMobileStepper1/>
        </Grid>
        <Grid item xs={12} md={12}>
          {/* component for the 'restaurants near you*/}
          <TextMobileStepper2/>
        </Grid>
        <Grid item xs={12} md={12}>
          {/* Paper added for adding text */}
          <Paper square elevation={0} className={classes.paper}>
            Top Picks
            </Paper>
          {/* component for the 'top picks'*/}
          <SingleLineImageList/>
        </Grid>
        <Grid item xs={12} md={12}>
          {/* component for the search 'super savers'*/}
          <TextMobileStepper3/>
        </Grid>
      </Grid>
    </div>
  );
}
