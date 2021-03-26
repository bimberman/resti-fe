import { useState } from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import RestaurantPage from './components/ResturantView/RestaurantPage';
import SignInPage from './components/SignInPage/SignInPage';

function App() {

  // const BASE_URL = "http://jumpfinalprojectreviews-env.eba-5yianuah.us-east-1.elasticbeanstalk.com/api/";

  // useEffect(()=>{
  //       fetch(`${BASE_URL}/reviews`,{
  //         "Access-Control-Allow-Origin": "*"
  //       })
  //       .then(res => res.json())
  //       .then(data => {
  //         // eslint-disable-next-line no-console
  //         console.log(data);
  //       });
  //     }
  // )

  const [users, setUsers] = useState(
    [
      {
        id: 1,
        username: "ten",
        pass: "pass",
        email: "something@email.com",
        role: "user"
      },
      {
        id: 2,
        username: "root",
        pass: "rootroot",
        email: "something@email.com",
        role: "admin"
      }
    ]
  );

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

  const [restaurants] = useState(
    [
      {
        id: 1,
        title: "The Maw",
        rating: 4.5,
        description: "A classic burger joint that serves up USDA choice beef on two hot and toasy buns. Come try our classic baconator.",
        numOfReviews: 1,
        imgUrl: "https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg",
        foodGenre: "American, Restaurant",
        location: "1234 dixie lane",
        phoneNumber: "1234567890",
      },
      {
        id: 2,
        title: "The Maw 2",
        rating: 3,
        description: "A different burger joint that serves up USDA choice beef on two hot and toasy buns. Come try our classic baconator.",
        numOfReviews: 0,
        imgUrl: "https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg",
        foodGenre: "American, Restaurant",
        location: "1234 copycat lane",
        phoneNumber: "0987654321",
      },
      {
        id: 3,
        title: "Burger 2",
        rating: 4.5,
        description: "A classic burger joint that serves up USDA choice beef on two hot and toasy buns. Come try our classic baconator.",
        numOfReviews: 1,
        imgUrl: "https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg",
        foodGenre: "American, Restaurant",
        location: "1234 dixie lane",
        phoneNumber: "1234567890",
      },
      {
        id: 4,
        title: "Happy",
        rating: 5,
        description: "A different burger joint that serves up USDA choice beef on two hot and toasy buns. Come try our classic baconator.",
        numOfReviews: 0,
        imgUrl: "https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg",
        foodGenre: "American, Restaurant",
        location: "1234 copycat lane",
        phoneNumber: "0987654321",
      },
    ]
  )

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
