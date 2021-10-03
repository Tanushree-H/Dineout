import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// component added for adding address, time and number of the restaurant
import RecipeReviewCard1 from './AddressTimeRestaurant';
// component added for adding images of 'You may also like'
import SingleLineImageList from './YouMayAlsoLike';
// component added for adding a jist of the restaurant
import SimpleCard from './RestaurantJist';
// component for adding menu images
import BasicImageList from './RestaurantMenu';
// components added for reviews
import RecipeReviewCard from './ReviewRestaurant1';
import RecipeReviewCard2 from './ReviewRestaurant2';
import RecipeReviewCard4 from './ReviewRestaurant4';
import RecipeReviewCard3 from './ReviewRestaurant3';
// component for adding grids
import Grid from '@material-ui/core/Grid';
// component for adding text on paper
import { Paper } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center'
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          {/* tab names added */}
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Menu" {...a11yProps(1)} />
          <Tab label="Review" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      {/* added grid to every component */}

      

      <TabPanel value={value} index={0}>

      <Grid container spacing={5}>

        {/* components added to tab 1 */}
        <Grid item xs={12} md={12}>
        {/* jist of restaurant */}
        <SimpleCard />
        </Grid>
        
        <Grid item xs={12} md={12}>
        {/* address, time and number of restaurant */}
        <RecipeReviewCard1 />
        </Grid>
        
        <Grid item xs={12} md={12}>
          {/* text added for heading */}
        <Paper className={classes.paper}>You may also like</Paper>
        {/* you may also like image list */}
        <SingleLineImageList />
        </Grid>
        </Grid>

      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container spacing={5}>

        {/* components added to tab 2 */}

        <Grid item xs={12} md={12}>
        {/* image list for menu photos */}
        <BasicImageList />
        </Grid>
        </Grid>

      </TabPanel>
      <TabPanel value={value} index={2}>
      <Grid container spacing={5}>

        {/* components added to tab 3 */}

        {/* reviews */}

        <Grid item xs={12} md={12}>
        <RecipeReviewCard />
        </Grid>

        <Grid item xs={12} md={12}>
        <RecipeReviewCard2 />
        </Grid>

        <Grid item xs={12} md={12}>
        <RecipeReviewCard3 />
        </Grid>

        <Grid item xs={12} md={12}>
        <RecipeReviewCard4 />
        </Grid>


        </Grid>
      </TabPanel>
      
    </div>
  );
}
