import React from 'react';
import Container from '@material-ui/core/Container';
import PrimarySearchAppBar from '../Components/TopSearchBar';
import SwipeableTextMobileStepper from '../Components/CarouselMenu';
import TextMobileStepper from '../Components/Carousel';



export default function Home() {
  return (
    <React.Fragment>
        <Container maxWidth="sm">
        <PrimarySearchAppBar/>
        
        <SwipeableTextMobileStepper/>
        <TextMobileStepper/>
        <TextMobileStepper/>
         
          
        
        </Container>
    </React.Fragment>
  );
}