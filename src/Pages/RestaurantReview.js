import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/ButtonRestaurantReview';
import BasicTextFields from '../Components/TextFieldRestaurantReview';
import RecipeReviewCard1 from '../Components/CardRestaurantReview1';
import RecipeReviewCard2 from '../Components/CardRestaurantReview2';





export default function RestaurantReview() {
  return (
    <React.Fragment>
        <Container maxWidth="sm">
        <BasicTextFields/>
        <ContainedButtons/>
        <RecipeReviewCard1/>
        <RecipeReviewCard2/>
        </Container>
    </React.Fragment>
  );
}