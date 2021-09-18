import React from 'react';
import Container from '@material-ui/core/Container';
import SwipeableTextMobileStepper from '../Components/CarouselMenuRestaurantMain';
import SimpleTabs from '../Components/TabsRestaurantMain';
import ContainedButtons from '../Components/FixedButtonRestaurantMain';



export default function RestaurantMain() {
  return (
    <React.Fragment>
        <Container fixed >
        
        <SwipeableTextMobileStepper/>
        <SimpleTabs/>
        <ContainedButtons/>

        </Container>
    </React.Fragment>
  );
}