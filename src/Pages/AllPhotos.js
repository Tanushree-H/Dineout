import React from 'react';
import Container from '@material-ui/core/Container';
// Used the component for adding a grid to the page
import CenteredGrid2 from '../Components/AllPhotosHurrycane.js/AllPhotosGrid';
import { Hidden } from '@material-ui/core';
import CenteredGrid9 from '../Components/AllPhotosHurrycane.js/DAllPhotosGrid';

export default function AllPhotos() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          <Hidden mdUp>
          {/* Grid for all components on the all photos page */}
          <CenteredGrid2/>
          </Hidden>
        </p>

        <p>
          <Hidden mdDown>
          {/* Grid for all components on the all photos page */}
          <CenteredGrid9/>
          </Hidden>
        </p>
      </Container>
    </React.Fragment>
  );
}