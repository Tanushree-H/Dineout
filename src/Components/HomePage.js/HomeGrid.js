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
    padding: theme.spacing(1),
    textAlign: 'left',
    color: '000000',
  },
}));

export default function CenteredGrid() {
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
          <Paper square elevation={0} className={classes.paper}></Paper>
          <Paper square elevation={0} className={classes.paper}></Paper>
        </Grid>

        {/* Component for advertisements */}
        <Grid item xs={12} md={12}>
          <SwipeableTextMobileStepper />
        </Grid>

        {/* component for the 'best offers'*/}
        <Grid item xs={12} md={12}>
          <TextMobileStepper1 />
        </Grid>

        {/* component for the 'restaurants near you*/}
        <Grid item xs={12} md={12}>
          <TextMobileStepper2 />
        </Grid>

        {/* component for the 'top picks'*/}
        <Grid item xs={12} md={12}>
          {/* Paper added for adding text */}
          <Paper square elevation={0} className={classes.paper}>
            Top Picks
          </Paper>
          <SingleLineImageList />
        </Grid>

        {/* component for the search 'super savers'*/}
        <Grid item xs={12} md={12}>
          <TextMobileStepper3 />
        </Grid>
      </Grid>

    </div>
  );
}
