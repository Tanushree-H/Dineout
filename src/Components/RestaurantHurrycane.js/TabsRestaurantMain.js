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
  paper: {
    paddingLeft: theme.spacing(0),
    paddingBottom: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    width: 'auto',
  },
  paper1: {
    // color modified 
    backgroundColor: '#5D1241',
  }
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
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered className={classes.paper1}>
          {/* tab names added */}
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Menu" {...a11yProps(1)} />
          <Tab label="Review" {...a11yProps(2)} />
        </Tabs>
      </AppBar>


      {/* added grid to every component in the tabs */}

      {/* components added to tab 1 */}


      <TabPanel value={value} index={0}>

        <Grid container spacing={5}
          direction="column"
          style={{ minHeight: '100vh' }}>


          {/* jist of restaurant */}
          <Grid item xs={12} md={12}>
            <SimpleCard />
          </Grid>

          {/* address, time and number of restaurant  */}
          <Grid item xs={12} md={12}>
            <RecipeReviewCard1 />
          </Grid>

          {/* you may also like  */}
          <Grid item xs={12} md={12}>
            {/* paper added for heading */}
            <Paper square elevation={0} className={classes.paper}>You may also like</Paper>
            <SingleLineImageList />
          </Grid>
        </Grid>



        {/* components added to tab 2 */}


      </TabPanel>
      <TabPanel value={value} index={1}>

        <Grid container spacing={5}>


          {/* image list for menu photos */}
          <Grid item xs={12} md={12}>
            <BasicImageList />
          </Grid>
        </Grid>



        {/* components added to tab 3 */}

      </TabPanel>
      <TabPanel value={value} index={2}>

        <Grid container spacing={5}>


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
