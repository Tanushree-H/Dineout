import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// added for linking the pages
import { Link, Router } from "react-router-dom";
// component added for adding grids
import { Grid } from '@material-ui/core';


const tutorialSteps = [
  {
    // heading  added
    label: 'Restaurants Near You',
    imgPath:
      // image path changed according to required image
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    // information about restaurant
    name: 'Hurrycane',
    cuisine1: 'Mexican',
    cuisine2: 'Chinese',
    cuisine3: 'Continental',
    body: '101, Lokhandwala, Andheri west'

  },
  {

    // heading  added
    label: 'Restaurants Near You',
    imgPath:
      // image path changed according to required image
      'https://assets.cntraveller.in/photos/60ba0b72ee63ec1fe6ee851e/master/pass/cecconis.jpg',
    // information about restaurant
    name: 'Pop Tates',
    cuisine1: 'American',
    cuisine2: 'Japanese',
    cuisine3: 'Continental',
    body: 'Opp Inox theatre, Nariman Theatre '

  },
  {

    // heading  added
    label: 'Restaurants Near You',
    imgPath:
      // image path changed according to required image
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKHcxzzZIhGaWZmmQD7gjE3l3cqhC4C7lioriem6eYQ0PNQE7CjUL-VUZ8jyntbJfQMw&usqp=CAU',
    // information about restaurant
    name: 'Chillies',
    cuisine1: 'Mexican',
    cuisine2: 'Chinese',
    cuisine3: 'Continental',
    body: 'Sadashiv Road, Mahim '
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },


  header: {
    display: 'flex',
    height: 50,
    alignItems: 'center',
    fontSize: 18,
    paddingLeft: theme.spacing(1),


  },

  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default function TextMobileStepper2() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>

      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>

      {/* connecting the 'restaurants near you' to the restaurant page by adding a link to the back button */}
      <Link to={process.env.PUBLIC_URL + '/restaurantmain'}>
        <img
          className={classes.img}
          src={tutorialSteps[activeStep].imgPath}
        />
      </Link>


      {/* added grid to information about restaurant */}

      {/*  information about restaurant called here */}

      <Grid container spacing={1} direction="row"
        alignContent="center"
        alignItems="center"
      >
        {/* information about name of restaurant */}
        <Grid item xs={4}>
          <Paper square elevation={0} className={classes.header}>
            <Typography>
              {tutorialSteps[activeStep].name}
            </Typography>
          </Paper>
        </Grid>


        {/* information about all 3 cuisines of the restaurant  */}
        <Paper square elevation={0} className={classes.header}>
          <Grid item xs={4}>
            <Typography>
              {tutorialSteps[activeStep].cuisine1}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography>
              {tutorialSteps[activeStep].cuisine2}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography>
              {tutorialSteps[activeStep].cuisine3}
            </Typography>
          </Grid>
        </Paper>


        {/* information about the address of the restaurant  */}
        <Grid item xs={12}>
          <Paper square elevation={0} className={classes.header}>
            <Typography>
              {tutorialSteps[activeStep].body}
            </Typography>
          </Paper>
        </Grid>
      </Grid>


      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </Button>

        }

      />

    </div>
  );
}
