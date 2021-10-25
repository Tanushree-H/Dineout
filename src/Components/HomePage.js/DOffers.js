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

    imgPath:
      // image path changed according to required image
      'https://www.sbicard.com/sbi-card-en/assets/media/images/personal/offers/categories/dining/buffet/d-buffet-festival.jpg',
  },
  {

    imgPath:
      // image path changed according to required image
      'https://dealicious.me/wp-content/uploads/2021/03/amritsr-1024x390.jpg',
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(1),


  },
  img: {
    height: 400,
    maxWidth: 1200,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default function TextMobileStepper1() {
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
        variant="dots"
        activeStep={activeStep}
        className={classes.root}
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