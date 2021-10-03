import React from 'react';
import Container from '@material-ui/core/Container';
// Used the component for adding a grid to the page
import CenteredGrid2 from '../Components/AllPhotosHurrycane.js/AllPhotosGrid';


export default function AllPhotos() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          {/* Grid for all components on the all photos page */}
          <CenteredGrid2/>
        </p>
      </Container>
    </React.Fragment>
  );
}