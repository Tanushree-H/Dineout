import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// floating button component added for the buttons of 'reserve a table' and 'i' as they have to be seen prominently and above other components
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      {/* 'reserve a table' button added */}
      <Fab variant="extended" color="primary" >
        Reserve a Table
      </Fab>
      {/* 'i' button added */}
      <Fab variant="extended" color="primary">
        i
      </Fab>
    </div>
  );
}

