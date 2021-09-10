import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/Button';
import SwipeableTextMobileStepper from '../Components/CarouselMenu';
import BasicTextFields from '../Components/TextField'
import SimpleTabs from '../Components/RestaurantTab';
import RecipeReviewCard from '../Components/Card';


export default function RestaurantMain() {
  return (
    <React.Fragment>
        <Container maxWidth="sm">
        <ContainedButtons/>
        <SwipeableTextMobileStepper/>
        <SimpleTabs/>
          <BasicTextFields/>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
        </Container>
    </React.Fragment>
  );
}