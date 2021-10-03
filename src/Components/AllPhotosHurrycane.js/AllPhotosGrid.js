import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// Used the component for back button
import ContainedButtons from './BackButtonAllPhotos';
// Used the component for displaying all the images on the page along with showing who has uploaded it
import TitlebarImageList from './ImagesAllPhotos';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    
  
  },
}));

export default function CenteredGrid2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* grid added */}
      <Grid container spacing={0.1}
       direction= "row"
       alignItems="center"
       justify="center"
       style={{ minHeight: '100vh' }}
       >
        
        
      

           <Grid item xs={2} md={2}>
             {/* back button */}
           <ContainedButtons/>
           </Grid>

           <Grid item xs={8} md={8}>
           {/* component added for text */}
           All Photos
           </Grid>
          

        <Grid item xs={12} md={12}>
             {/* component for the images' */}
          <TitlebarImageList/>
        </Grid>    
      </Grid>
    </div>
  );
}
