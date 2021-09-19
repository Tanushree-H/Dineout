import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// component imported for 'allphotosbutton'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      {/* button component added for 'all photos' */}
      <Button variant="contained" color="primary">
        ALL PHOTOS
      </Button>

    </div>
  );
}
