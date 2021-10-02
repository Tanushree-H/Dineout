import React from 'react';
import Container from '@material-ui/core/Container';
import CenteredGrid from '../Components/HomePage.js/HomeGrid';
// Used the component for adding a grid to the page




export default function Home() {
  return (

    <div className="App">
    

    <React.Fragment>
      <Container maxwidth= "lg">

       
       
        {/* Grid for all components on the home page */}
       <CenteredGrid/>


  </Container>
    </React.Fragment>


    
    </div>
  );
}