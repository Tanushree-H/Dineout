import React from 'react';
import Container from '@material-ui/core/Container';
// Used the component for adding images of the restaurant
import SwipeableTextMobileStepper from '../Components/ImagesRestaurantMain';
// Used the component for tabs in the restaurant page 
import SimpleTabs from '../Components/TabsRestaurantMain';
// Used the component for adding buttons
import FloatingActionButtons from '../Components/ReserveTableandI';




export default function RestaurantMain() {
  return (

    
    <React.Fragment>
      <Container fixed >

        {/* component for the initial images of the restaurant*/}
        <SwipeableTextMobileStepper />
        {/* component for the tabs of 'overview' , 'menu' and 'review'*/}
        <SimpleTabs />
        {/* component for the 'reserve a table' and 'i' button*/}
        <FloatingActionButtons />


      </Container>
    </React.Fragment>
  );
}