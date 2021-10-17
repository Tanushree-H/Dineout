import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { IconButton } from '@material-ui/core';
// image for home
import Home1 from '../Assets/Home1.png';
// image for book a table
import BookATable from '../Assets/BookATable.png';
// image for dineout passport
import DP from '../Assets/DP.png';
// image for payment
import Payment from '../Assets/Payment.png';
// image for community
import Community from '../Assets/Community.png';

const useStyles = makeStyles({
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation position="fixed"
      bottom="0"

      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);

      }}
    >
      {/* all icons declared, named and size customised*/}
      <BottomNavigationAction label="Home" icon={<IconButton >
        <img src={Home1} height={35} width={40} />
      </IconButton>} />

      <BottomNavigationAction label="Table" icon={<IconButton>
        <img src={BookATable} height={40} width={50} />
      </IconButton>} />

      <BottomNavigationAction label="DP" icon={<IconButton>
        <img src={DP} height={40} width={40} />
      </IconButton>} />

      <BottomNavigationAction label="Payment" icon={<IconButton>
        <img src={Payment} height={45} width={70} />
      </IconButton>} />

      <BottomNavigationAction label="Community" icon={<IconButton>
        <img src={Community} height={40} width={50} />
      </IconButton>} />

    </BottomNavigation>
  );
}
