import React from 'react';
import Container from '@material-ui/core/Container';
// Used the component for adding a grid to the page
import CenteredGrid1 from '../Components/RestaurantHurrycane.js/RestaurantGrid';
// component for 'Reserve a table' and 'i'
import FloatingActionButtons from '../Components/RestaurantHurrycane.js/ReserveTableandI';
// component added for hiding a button above a certain screen size
import { Hidden } from '@material-ui/core';
import CenteredGrid2 from '../Components/RestaurantHurrycane.js/DRestaurantGrid';






export default function RestaurantMain() {
  return (

    
    <React.Fragment>
      <Container fixed >
      <Hidden mdUp>
      {/* Grid for all components on the restaurant page */}
       <CenteredGrid1/>
       </Hidden>
      {/* component is only visible on mobile screen */}
      <Hidden mdUp>
      {/* component for 'reserve a table' and 'i' button  */}
      <FloatingActionButtons/>
      </Hidden>

      <Hidden mdDown>
      <CenteredGrid2/>
      </Hidden>


      </Container>
    </React.Fragment>
  );
}