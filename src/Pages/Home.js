import React from 'react';
import Container from '@material-ui/core/Container';
// Used the component for adding a grid to the page
import CenteredGrid from '../Components/HomePage.js/HomeGrid';
// component added for search bar
import PrimarySearchAppBar from '../Components/HomePage.js/TopSearchBarHome';





export default function Home() {
  return (

    <div className="App">
    

    <React.Fragment>
      <Container maxwidth= "lg">

    
	
  <header className="App-header">
    {/* added the top search bar */}
    <PrimarySearchAppBar/>
  </header>
  
       
        {/* Grid for all components on the home page */}
       <CenteredGrid/>


  </Container>
    </React.Fragment>


    
    </div>
  );
}