import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const tutorialSteps = [
  {
    // heading of 'super savers' added
    label: 'Super Savers',
    imgPath:
      // image path changed according to required image
      'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content12671.jpg',
  },
  {
    // heading of 'super savers' added
    label: 'Super Savers',
    imgPath:
      // image path changed according to required image
      'https://media.architecturaldigest.in/wp-content/uploads/2019/02/Ministry-of-Crab-Khar-Mumbai-5.jpg',
  },
  {
    // heading of 'super savers' added
    label: 'Super Savers',
    imgPath:
      // image path changed according to required image
      'https://assets.gqindia.com/photos/5e79f8f1daa717000852d708/master/w_1600%2Cc_limit/Bhukhara-New-Delhi.jpg',
  },
  {
    // heading of 'super savers' added
    label: 'Super Savers',
    imgPath:
      // image path changed according to required image
      'https://images.indianexpress.com/2017/12/indian-accent-restaurant_759.jpg',
  },
  {
    // heading of 'super savers' added
    label: 'Super Savers',
    imgPath:
      // image path changed according to required image
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8e1gYdwl0d3exi6UIERBl9mGfufW1PHgj5A&usqp=CAU',
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
    paddingLeft: theme.spacing(4),
    // backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
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
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}
