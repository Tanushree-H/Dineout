import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// icon for home
import HomeIcon from '@material-ui/icons/Home';
// icon for book a table
import LocalDiningOutlinedIcon from '@material-ui/icons/LocalDiningOutlined';
// icon for dineout passport
import CardMembershipOutlinedIcon from '@material-ui/icons/CardMembershipOutlined';
// icon for payment
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
// icon for community
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
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
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Book a Table" icon={<LocalDiningOutlinedIcon />} />
      <BottomNavigationAction label="Dineout Passport" icon={<CardMembershipOutlinedIcon />} />
      <BottomNavigationAction label="Payment" icon={<PaymentOutlinedIcon />} />
      <BottomNavigationAction label="Community" icon={<PeopleOutlineIcon />} />
    </BottomNavigation>
  );
}
