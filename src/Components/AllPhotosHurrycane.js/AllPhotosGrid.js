import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// Used the component for back button
import ContainedButtons from './BackButtonAllPhotos';
// Used the component for displaying all the images on the page along with showing who has uploaded it
import TitlebarImageList from './ImagesAllPhotos';
// Used the component for adding text
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(1),
    textAlign: 'left',
    color: '#F2635C',
    
  
  },
}));

export default function CenteredGrid2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


      {/* grid added */}
      <Grid container spacing={2}
       direction= "row"
       alignItems="center"
       justify="left"
       style={{ minHeight: '85vh' }}
       >
        
        
      
        {/* component for back button */}
           <Grid item xs={3} md={3}>
           <ContainedButtons/>
           </Grid>


          {/* component for heading text */}
           <Grid item xs={9} md={9}>
              {/* Paper added for adding text */}
          <Typography className={classes.paper}>
           All Photos
           </Typography>
           </Grid>
           
          
 {/* component for the images' */}
        <Grid item xs={12} md={12}>
          <TitlebarImageList/>
        </Grid>    
      </Grid>
    </div>
  );
}
