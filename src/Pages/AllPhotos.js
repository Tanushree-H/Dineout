import React from 'react';
import Container from '@material-ui/core/Container';
// Used the component for displaying all the images on the page along with showing who has uploaded it
import TitlebarImageList from '../Components/ImagesAllPhotos';
// Used the component for back button
import UploadButtons from '../Components/BackButtonAllPhotos';

export default function AllPhotos() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          {/* component for back button */}
          <UploadButtons />
          {/* Text for the title of the page */}
          All photos
          {/* component for the images' */}
          <TitlebarImageList />
        </p>
      </Container>
    </React.Fragment>
  );
}