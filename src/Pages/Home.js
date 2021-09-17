import React from 'react';
import Container from '@material-ui/core/Container';
import PrimarySearchAppBar from '../Components/TopSearchBarHome';
import SwipeableTextMobileStepper from '../Components/CarouselMenuHome';
import TextMobileStepper1 from '../Components/CarouselHome1';
import TextMobileStepper2 from '../Components/CarouselHome2';
import TextMobileStepper3 from '../Components/CarouselHome3';
import SingleLineImageList from '../Components/SingleImageListHome';


export default function Home() {
  return (
    <React.Fragment>
        <Container maxWidth="sm">
        <PrimarySearchAppBar/>
        
        <SwipeableTextMobileStepper/>
        <TextMobileStepper1/>
        <TextMobileStepper2/>
        <SingleLineImageList/>
        <TextMobileStepper3/>
         
          
        
        </Container>
    </React.Fragment>
  );
}