import Header from './Header';
import NavBar from './NavBar';
import Card from './Card';
import Footer from './Footer';
import { useEffect, useState } from 'react';

function HomePage(props) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(()=>{
      props.restaurants.forEach(restaurant=>{
        setRestaurants(prevState=>([
          ...prevState,
          restaurant
        ]))
      })
  }, [props.restaurants])

  return (
    <div>
      <NavBar currentUser={props.currentUser}/>
      <Header/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className = "container">
        <div className = "row justify-content-center">
          {restaurants.map(restaurant => {
              return <Card
                key={restaurant.id}
                restaurant={restaurant}
                setCurrentRestaurant={props.setCurrentRestaurant}
              />
          })}
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default HomePage;
