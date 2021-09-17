import React from 'react';
import Container from '@material-ui/core/Container';
import SwipeableTextMobileStepper from '../Components/CarouselMenuRestaurantMain';
import SimpleTabs from '../Components/TabsRestaurantMain';



export default function RestaurantMain() {
  return (
    <React.Fragment>
        <Container maxWidth="sm">
        
        <SwipeableTextMobileStepper/>
        <SimpleTabs/>
         

        </Container>
    </React.Fragment>
  );
}