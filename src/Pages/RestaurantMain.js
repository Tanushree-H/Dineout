import React from 'react';
import Container from '@material-ui/core/Container';
import SwipeableTextMobileStepper from '../Components/CarouselMenuRestaurantMain';
import SimpleTabs from '../Components/TabsRestaurantMain';
import FloatingActionButtons from '../Components/Overview5';




export default function RestaurantMain() {
  return (
    <React.Fragment>
        <Container fixed >
        
        <SwipeableTextMobileStepper/>
        <FloatingActionButtons/>
        <SimpleTabs/>
        

        </Container>
    </React.Fragment>
  );
}