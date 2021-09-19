import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Gallery from './Pages/Gallery.js'
import RestaurantMain from './Pages/RestaurantMain.js'
import RestaurantMenu from './Pages/RestaurantMenu.js'
import RestaurantReview from './Pages/RestaurantReview.js'
import SimpleBottomNavigation from './Components/BottomNavigation';
import AllPhotos from './Pages/AllPhotos';
import Intro from './Pages/Intro'
function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
      
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery/> </Route>
            <Route path={process.env.PUBLIC_URL + '/restaurantmain'}  > <RestaurantMain/> </Route>
            <Route path={process.env.PUBLIC_URL + '/restaurantmenu'}  > <RestaurantMenu/> </Route>
            <Route path={process.env.PUBLIC_URL + '/restaurantreview'}  > <RestaurantReview/> </Route>
            <Route path={process.env.PUBLIC_URL + '/allphotos'}  > <AllPhotos/> </Route>
            <Route path={process.env.PUBLIC_URL + '/intro'}  > <Intro/> </Route>
          </Switch>

 

      <footer className="App-footer">
        <SimpleBottomNavigation/>
      </footer>
    </div>
  );
  }

export default App;
