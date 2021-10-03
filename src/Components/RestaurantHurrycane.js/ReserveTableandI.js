import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// floating button component added for the buttons of 'reserve a table' and 'i' as they have to be seen prominently and above other components
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      // position : 'static',
      
    },
    
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();
  const style = {
    margin: 0,
    top: 'auto',
    right: 'auto',
    bottom: 80,
    left: 80,
    position: 'fixed',
};

const style1 = {
  margin: 0,
  top: 'auto',
  right: 'auto',
  bottom: 80,
  left: 280,
  position: 'fixed',
};
  return (
    <div className={classes.root}>
       
      {/* 'reserve a table' button added */}
      <Fab variant="extended" color="primary" style={style}
 >
        Reserve a Table
      </Fab>
      {/* 'i' button added */}
      <Fab variant="extended" color="primary" style={style1}>
        i
      </Fab>
    </div>
  );
}

