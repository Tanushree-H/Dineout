import React from 'react';
import Container from '@material-ui/core/Container';
import TitlebarImageList from '../Components/AllPhotos';
import UploadButtons from '../Components/BackButtonAllPhotos';

export default function AllPhotos() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          <UploadButtons/>
          All photos
          <TitlebarImageList/>
        </p>
      </Container>
    </React.Fragment>
  );
}