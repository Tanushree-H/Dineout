import React from 'react';
import Container from '@material-ui/core/Container';
import BasicTextFields from '../Components/TextFieldRestaurantMenu';




export default function RestaurantMain() {
  return (
    <React.Fragment>
        <Container maxWidth="sm">
        
         <BasicTextFields/>
         
        
        </Container>
    </React.Fragment>
  );
}