import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Grid } from '@material-ui/core';

const tutorialSteps = [
  {
    // heading of 'super savers' added
    label: 'Super Savers',
    imgPath:
      // image path changed according to required image
      'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content12671.jpg',
    // information about restaurant
    name: 'Raj Bhog',
    cuisine1: 'Indian',
    cuisine2: 'Fusion',
    cuisine3: 'Korean',
    body: '402, Star Mall, Dadar'
  },
  {
    // heading of 'super savers' added
    label: 'Super Savers',
    imgPath:
      // image path changed according to required image
      'https://media.architecturaldigest.in/wp-content/uploads/2019/02/Ministry-of-Crab-Khar-Mumbai-5.jpg',
    // information about restaurant
    name: 'Island Grill',
    cuisine1: 'Indian',
    cuisine2: 'Italian',
    cuisine3: 'Mughlai',
    body: 'Viman Nagar, Andheri west'
  },
  {
    // heading of 'super savers' added
    label: 'Super Savers',
    imgPath:
      // image path changed according to required image
      'https://assets.gqindia.com/photos/5e79f8f1daa717000852d708/master/w_1600%2Cc_limit/Bhukhara-New-Delhi.jpg',
    // information about restaurant
    name: 'Pizzeria',
    cuisine1: 'Indian',
    cuisine2: 'Fusion',
    cuisine3: 'Russian',
    body: '402, Star Mall, Dadar'
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(1),
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },

  cuisine: {
    display: 'flex',
    height: 50,
    alignItems: 'center',
    fontSize: 18,
    color: '#FFFFFF',
    paddingLeft: theme.spacing(1),
    // text highlighted as required 
    backgroundColor: '#5D1241',
  }
}));

export default function TextMobileStepper3() {
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
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />

      {/* added grid information about restaurant */}

      {/* information about restaurant called here  */}

      <Grid container spacing={1} direction="row"
        alignContent="center"
        alignItems="center"
      >
        {/* information about name of restaurant */}
        <Grid item xs={3} md={3}>
          <Paper square elevation={0} className={classes.header}>
            <Typography>
              {tutorialSteps[activeStep].name}
            </Typography>
          </Paper>
        </Grid>


        {/* information about all 3 cuisines of the restaurant  */}
        <Grid item xs={3} md={3}>
          <Typography className={classes.cuisine}>
            {tutorialSteps[activeStep].cuisine1}
          </Typography>
        </Grid>

        <Grid item xs={3} md={3}>
          <Typography className={classes.cuisine}>
            {tutorialSteps[activeStep].cuisine2}
          </Typography>
        </Grid>

        <Grid item xs={3} md={3}>
          <Typography className={classes.cuisine}>
            {tutorialSteps[activeStep].cuisine3}
          </Typography>
        </Grid>



        {/* information about the address of the restaurant  */}
        <Grid item xs={12} md={12}>
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
