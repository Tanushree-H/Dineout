import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '150ch',

      '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
        '& fieldset': {            // - The <fieldset> inside the Input-root
          borderColor: '#F2635C',
        },
        '&:hover fieldset': {
          borderColor: '#F2635C', // - Set the Input border when parent has :hover
        },
        '&.Mui-focused fieldset': { // - Set the Input border when parent is focused 
          borderColor: '#F2635C',
        },
      },

    },
  },

}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <TextField id="outlined-basic" label="Search in Mumbai" variant="outlined" />

    </form>
  );
}
