import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { IconButton } from '@material-ui/core';
// image for home
import Home from '../Assets/Home.png';
// image for book a table
import BookATable from '../Assets/BookATable.png';
// image for dineout passport
import DineoutPassport from '../Assets/DineoutPassport.png';
// image for payment
import Payment from '../Assets/Payment.png';
// image for community
import Community from '../Assets/Community.png';

const useStyles = makeStyles({
  // root: {
  //   width: 500,
  // },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation position= "fixed"
    bottom= "0"
    
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        
      }}
      showLabels
      className={classes.root}
      
    >
      {/* all icons declared and named */}
      <BottomNavigationAction label="Home" icon={<IconButton > 
        <img src={Home} height={40} width={40}/>
          </IconButton>} />

      <BottomNavigationAction label="Book a Table" icon={<IconButton>
        <img src={BookATable} height={40} width={50}/>
          </IconButton>} />

      <BottomNavigationAction label="Dineout Passport" icon={<IconButton>
        <img src={DineoutPassport} height={40} width={60}/>
          </IconButton>} />

      <BottomNavigationAction label="Payment" icon={<IconButton>
        <img src={Payment} height={40} width={70}/>
          </IconButton>} />

      <BottomNavigationAction label="Community" icon={<IconButton>
        <img src={Community} height={40} width={50}/>
          </IconButton>} />

    </BottomNavigation>
  );
}
