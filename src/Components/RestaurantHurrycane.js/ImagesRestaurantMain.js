import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
// button added for 'back'
import ContainedButtons from './BackButtonRestaurantMain';
// button added for 'all photos'
import ContainedButtons1 from './AllPhotosButton'
import { Grid } from '@material-ui/core';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    // heading of 'hurrycane' added
    label: 'Hurrycane',
    imgPath:
      // image path changed according to required image
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', 
    },
  {
    // heading of 'hurrycane' added
    label: 'Hurrycane',
    imgPath: 
      // image path changed according to required image
      'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
  },
  {
    // heading of 'hurrycane' added
    label: 'Hurrycane',
    imgPath:
      // image path changed according to required image
      'https://img.etimg.com/thumb/width-1200,height-900,imgsize-829462,resizemode-1,msid-82666514/industry/services/hotels-/-restaurants/staggered-lockdowns-start-to-bite-battered-restaurants.jpg',
  },
  {
    // heading of 'hurrycane' added
    label: 'Hurrycane',
    imgPath:
      // image path changed according to required image
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    // heading of 'hurrycane' added
    label: 'Hurrycane',
    imgPath:
      // image path changed according to required image
      'https://www.sundayguardianlive.com/wp-content/uploads/2020/07/3-Dib-restaurant-losses-edited.jpg',
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
    height: 80,
    paddingLeft: theme.spacing(1),
    backgroundColor: theme.palette.background.default,

  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  

    
  },
}));

function SwipeableTextMobileStepper() {
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

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
     <Paper square elevation={0} className={classes.header}>
     <Grid container spacing={3}>
     
      
      <Grid item xs={1} md= {1}>
        {/* back button added */}
         <ContainedButtons /> 
         </Grid>

         <Grid item xs={6} md={6}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
        </Grid>

        <Grid item xs={5} md={5}>
        {/* all photos button added */}
        <ContainedButtons1 />
        </Grid>
      
      </Grid>
      </Paper>

      <AutoPlaySwipeableViews

        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents

      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
           
           
           
   
          </div>
        ))}
      </AutoPlaySwipeableViews>

      
         
      
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

export default SwipeableTextMobileStepper;
