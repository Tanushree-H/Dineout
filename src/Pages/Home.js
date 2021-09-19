import React from 'react';
import Container from '@material-ui/core/Container';
// Used the component for the search bar at the top
import PrimarySearchAppBar from '../Components/TopSearchBarHome';
// Used the component for the advertisement carousel. Used the automatic swipe because they are advertisements and hence need to swipe automatically
import SwipeableTextMobileStepper from '../Components/AdvertisementsHome';
// Used the components for adding the carousels for the various restaurants and offers
import TextMobileStepper1 from '../Components/BestOffers';
import TextMobileStepper2 from '../Components/RestaurantsNearYou';
import TextMobileStepper3 from '../Components/SuperSavers';
// Used the component for adding images in a single line
import SingleLineImageList from '../Components/TopPicks';


export default function Home() {
  return (
    <React.Fragment>
      <Container fixed>

        {/* component for the search bar*/}
        <PrimarySearchAppBar />
        {/* Component for advertisements */}
        <SwipeableTextMobileStepper />
        {/* component for the 'best offers'*/}
        <TextMobileStepper1 />
        {/* component for the 'restaurants near you*/}
        <TextMobileStepper2 />
        {/* Text added as heading for this category */}
        Top Picks
        {/* component for the 'top picks'*/}
        <SingleLineImageList />
        {/* component for the search 'super savers'*/}
        <TextMobileStepper3 />



      </Container>
    </React.Fragment>
  );
}