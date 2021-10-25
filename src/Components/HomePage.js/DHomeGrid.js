import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from './DTopSearchBar';
import TextMobileStepper1 from './DOffers';
import ScrollableTabsButtonAuto from './Dtabs';
import { Typography } from '@material-ui/core';
import RecipeReviewCard from './DRestaurantsNearYou';
import RecipeReviewCard2 from './DRestaurantsNearYou2';
import RecipeReviewCard3 from './DRestaurantNearYou3';
import SingleLineImageList from './DTopPicks';
import SuperSavers from './DSuperSavers';
import SuperSavers2 from './DSuperSavers2';
import SuperSavers3 from './DSuperSavers3';
import SimpleCard from './footer';
import PrimarySearchAppBar1 from './DTopSearchBar';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: '000000',
    fontSize: '25px'
  },
}));

export default function CenteredGrid1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}
        direction="row"
        alignItems="left"
        justify="left"

      >

        {/* Grid added to all the components on the home page  */}

        {/* added for maintaining spacing  */}
        <Grid item xs={12} md={12}>
          <PrimarySearchAppBar1 />
        </Grid>

        <Grid item xs={12} md={12}>
          <Paper square elevation={0} className={classes.paper}></Paper>
          <Paper square elevation={0} className={classes.paper}></Paper>
        </Grid>

        <Grid item xs={12} md={12}>
          <ScrollableTabsButtonAuto />
        </Grid>

        <Grid item xs={12} md={12}>
          <TextMobileStepper1 />
        </Grid>

        <Grid item xs={12} md={12}>
          <Paper square elevation={0} className={classes.paper}>Restaurants Near You</Paper>

        </Grid>

        <Grid item xs={12} md={4}>
          <RecipeReviewCard />
        </Grid>

        <Grid item xs={12} md={4}>
          <RecipeReviewCard2 />
        </Grid>

        <Grid item xs={12} md={4}>
          <RecipeReviewCard3 />
        </Grid>

        <Grid item xs={12} md={12}>
          <Paper square elevation={0} className={classes.paper}>Top Picks</Paper>
        </Grid>

        <Grid item xs={12} md={12}>
          <SingleLineImageList />
        </Grid>

        <Grid item xs={12} md={12}>
          <Paper square elevation={0} className={classes.paper}>Super Savers</Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <SuperSavers />
        </Grid>

        <Grid item xs={12} md={4}>
          <SuperSavers2 />
        </Grid>

        <Grid item xs={12} md={4}>
          <SuperSavers3 />
        </Grid>

        <Grid item xs={12} md={12}>
          <SimpleCard />
        </Grid>




      </Grid>
    </div>
  );
}