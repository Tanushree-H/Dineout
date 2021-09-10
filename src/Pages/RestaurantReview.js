import React from 'react';
import Container from '@material-ui/core/Container';
import Checkboxes from '../Components/Review';
import InputWithIcon from '../Components/TextFieldIcon';
import ContainedButtons from '../Components/Button';





export default function RestaurantReview() {
  return (
    <React.Fragment>
        <Container maxWidth="sm">
        
          <Checkboxes/>
        <InputWithIcon/>
        <ContainedButtons/>
        </Container>
    </React.Fragment>
  );
}