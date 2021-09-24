import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// added the home page to the website
import Home from './Pages/Home.js'
// added the restaurant page to the website
import RestaurantMain from './Pages/RestaurantMain.js'
// component used for the bottom navigation of the website
import SimpleBottomNavigation from './Components/BottomNavigation';
// added the all photos page of the restaurants to the website
import AllPhotos from './Pages/AllPhotos';

function App() {
  return (
    <div className="App">
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            {/* Home page of the website */}
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            {/* Restaurant page of the website */}
            <Route path={process.env.PUBLIC_URL + '/restaurantmain'}  > <RestaurantMain/> </Route>
            {/* All photos page of restaurants of the website */}
            <Route path={process.env.PUBLIC_URL + '/allphotos'}  > <AllPhotos/> </Route>
           
          </Switch>

 

           <footer className="App-footer"> 
         <SimpleBottomNavigation/> 
         </footer> 
      </div>
  );
  }

export default App;
