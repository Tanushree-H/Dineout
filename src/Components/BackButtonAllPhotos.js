import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

export default function UploadButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


      <label htmlFor="icon-button-file">
        {/* component for back button on the page */}
        <Button>
          <ArrowBackIos />
        </Button>
      </label>
    </div>
  );
}

