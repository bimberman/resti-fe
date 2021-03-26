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

  const [users, setUsers] = useState(
    [
      {
        username: "ten",
        pass: "pass"
      },
      {
        username: "root",
        pass: "rootroot"
      }
    ]
  );

  const [currentUser, setCurrentUser] = useState({})

  const obj = {
    title: "The Maw",
    rating: 4.5,
    description: "A classic burger joint that serves up USDA choice beef on two hot and toasy buns. Come try our classic baconator.",
    numOfReviews: 13,
    imgUrl: "https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg",
    foodGenre: "American, Restaurant",
    location: "1234 dixie lane",
    phoneNumber: "1234567890",
    person: {
      name: "john doe",
      review: "This place sucks",
      userRole: "admin",
      userImg: "http://brunoclaessens.com/wp-content/uploads/2015/07/Darth-Vader-Mumuye-head.jpg"
    }
  }
  const [data] = useState(obj);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'><HomePage  data= {data}/></Route>
          <Route exact path='/Restaurant'><RestaurantPage data= {data}/></Route>
          <Route exact path='/Login'><SignInPage setUsers={setUsers} users={users} setCurrentUser={setCurrentUser}/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
