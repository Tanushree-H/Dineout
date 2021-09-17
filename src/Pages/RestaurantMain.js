import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/ButtonRestaurantMain';
import SwipeableTextMobileStepper from '../Components/CarouselMenuRestaurantMain';
import BasicTextFields from '../Components/TextFieldRestaurantMain'
import SimpleTabs from '../Components/TabsRestaurantMain';
import RecipeReviewCard1 from '../Components/CardRestaurantMain1';
import RecipeReviewCard2 from '../Components/CardRestaurantMain2';
import InputWithIcon from '../Components/TextIconRestaurantMain';

export default function RestaurantMain() {
  return (
    <React.Fragment>
        <Container maxWidth="sm">
        <ContainedButtons/>
        <SwipeableTextMobileStepper/>
        <InputWithIcon/>
        <SimpleTabs/>
          <BasicTextFields/>
        <RecipeReviewCard1/>
        <RecipeReviewCard2/>
        </Container>
    </React.Fragment>
  );
}