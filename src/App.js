import { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import RestaurantPage from './components/ResturantView/RestaurantPage';
import SignInPage from './components/SignInPage/SignInPage';

function App() {

  const BASE_URL_RESTAURANT_SERVICE = "http://jumprestaurantservice-env.eba-zehpzbtd.us-east-1.elasticbeanstalk.com";
  const BASE_URL_USER_SERVICE = "http://jumpfinalprojectusersservice-env.eba-jm5kjp4s.us-east-1.elasticbeanstalk.com";

  useEffect(()=>{
    fetchAllRestaurants();
    fetchAllUsers();
  },[])

  const fetchAllRestaurants = async () => {
    try {
      fetch(`${BASE_URL_RESTAURANT_SERVICE}/api/restaurants/all`)
        .then(res => res.json())
        .then(data => {
          setRestaurants(data);
        });
    } catch (err) {
      console.error("Getting error: " + err);
    }
  }

  const fetchAllUsers = async () => {
    try {
      fetch(`${BASE_URL_USER_SERVICE}/api/users`)
        .then(res => res.json())
        .then(data => {
          setUsers(data);
        });
    } catch (err) {
      console.error("Getting error: " + err);
    }
  }

  const [users, setUsers] = useState();

  const [currentUser, setCurrentUser] = useState({
    // id: 1,
    // username: "ten",
    // pass: "pass",
    // email: "something@email.com",
    // role: "user"
  })

  const [idCounter, setIdCounter] = useState({
    restaurants: 2,
    users: 2,
    reviews: 1
  })

  const [restaurants, setRestaurants] = useState([])

  const [findRestaurants, setFindRestaurants] = useState([])

  const [currentRestaurant, setCurrentRestaurant] = useState({})

  const [reviews, setReviews] = useState(
    [
      {
        id: 1,
        restaurantId: 1,
        rating: 4.5,
        message: "A classic burger joint that serves up USDA choice beef on two hot and toasy buns. Come try our classic baconator.",
        user: {
          username: "ten",
          role: "user",
          userImg: "http://brunoclaessens.com/wp-content/uploads/2015/07/Darth-Vader-Mumuye-head.jpg"
        }
      }
    ]
  )

  const searchRestaurants = (str) => {
    if (str) {
      setFindRestaurants( restaurants.filter( restaurant=> str === restaurant.title ))
    }

    if(!str.length){
      setFindRestaurants([])
    }
  }

  const partialSearchRestaurants = (str) => {
    if(str){
      setFindRestaurants(restaurants.filter(restaurant => restaurant.title.toLowerCase().includes(str.toLowerCase()) ))
    }

    if (!str.length) {
      setFindRestaurants([])
    }
  }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <HomePage
              restaurants={findRestaurants.length ? findRestaurants : restaurants}
              searchRestaurants={searchRestaurants}
              partialSearchRestaurants={partialSearchRestaurants}
              setCurrentRestaurant={setCurrentRestaurant}
              currentUser={currentUser}
              idCounter={idCounter}
              setIdCounter={setIdCounter}
              setFindRestaurants={setFindRestaurants}/>
          </Route>
          <Route exact path='/Restaurant'>
            <RestaurantPage
              currentRestaurant={currentRestaurant}
              currentUser={currentUser}
              reviews={reviews}
              setReviews={setReviews}
              idCounter={idCounter}
              setIdCounter={setIdCounter}
              />
          </Route>
          <Route exact path='/Login'>
            <SignInPage
              setUsers={setUsers}
              users={users}
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
              idCounter={idCounter}
              setIdCounter={setIdCounter}/>\
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
