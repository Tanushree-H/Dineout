import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/ButtonRestaurantMain';
import SwipeableTextMobileStepper from '../Components/CarouselMenuRestaurantMain';
import BasicTextFields from '../Components/Overview3'
import SimpleTabs from '../Components/TabsRestaurantMain';
import RecipeReviewCard1 from '../Components/Overview2';
import RecipeReviewCard2 from '../Components/CardRestaurantMain2';


export default function RestaurantMain() {
  return (
    <React.Fragment>
        <Container maxWidth="sm">
        
        <SwipeableTextMobileStepper/>
        <SimpleTabs/>
          {/* <BasicTextFields/> */}
        {/* <RecipeReviewCard1/>
        <RecipeReviewCard2/> */}

        </Container>
    </React.Fragment>
  );
}