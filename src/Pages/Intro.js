import React from 'react';
import Container from '@material-ui/core/Container';
import CenteredGrid from '../Components/SimpleGrid';
export default function Intro() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          <CenteredGrid/>
          
        </p>
      </Container>
    </React.Fragment>
  );
}