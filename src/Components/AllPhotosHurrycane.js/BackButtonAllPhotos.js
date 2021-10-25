import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// added for linking the pages
import { Link, Router } from "react-router-dom";
// added for adding a button on the page
import Button from '@material-ui/core/Button';
// icon imported for adding back button on the page
import { ArrowBackIos } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


      {/* connecting the all photos page to the restaurant page by adding a link to the back button */}

      <Link to={process.env.PUBLIC_URL + '/restaurantmain'}>
        {/* changed color of button and icon  */}
        <Button style={{ color: '#F2635C', }} href="">
          <ArrowBackIos />
        </Button>
      </Link>
    </div>
  );
}

