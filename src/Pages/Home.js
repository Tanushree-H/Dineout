import React from 'react';
import Container from '@material-ui/core/Container';
// Used the component for adding a grid to the page
import CenteredGrid from '../Components/HomePage.js/HomeGrid';
// component added for search bar
import PrimarySearchAppBar from '../Components/HomePage.js/TopSearchBarHome';
import CenteredGrid1 from '../Components/HomePage.js/DHomeGrid'
import { Hidden } from '@material-ui/core';





export default function Home() {
  return (

    <div className="App">
    

    <React.Fragment>
      <Container maxwidth= "lg">

    
	
  
  
       
        {/* Grid for all components on the home page */}
        <Hidden mdUp>
        <header className="App-header">
    {/* added the top search bar */}
    <PrimarySearchAppBar/>
  </header>
       <CenteredGrid/>
       </Hidden>

       <Hidden mdDown>
       <CenteredGrid1/>
       </Hidden>


  </Container>
    </React.Fragment>


    
    </div>
  );
}