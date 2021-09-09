import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleBottomNavigation from '../Components/BottomNavigation';
import PrimarySearchAppBar from '../Components/TopSearchBar';
import SwipeableTextMobileStepper from '../Components/CarouselMenu';
import SingleLineImageList from '../Components/SingleImageList';

export default function Home() {
  return (
    <React.Fragment>
        <Container maxWidth="sm">
        <PrimarySearchAppBar/>
        <SwipeableTextMobileStepper/>
        <SwipeableTextMobileStepper/>
        <SingleLineImageList/>
          <SimpleBottomNavigation/>
        
        </Container>
    </React.Fragment>
  );
}