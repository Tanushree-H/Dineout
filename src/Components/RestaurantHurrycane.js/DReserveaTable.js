import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// added for linking the pages
import { Link, Router } from "react-router-dom";
// component imported for 'allphotosbutton'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons4() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      
      

      
        {/* customised color of the button  */}
        <Button variant="contained" style={{ backgroundColor: '#F2635C', color: '#FFFFFF' }} href="">
          RESERVE A TABLE
        </Button>
      



    </div>
  );
}
