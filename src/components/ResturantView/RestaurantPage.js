import NavBar from '../HomePage/NavBar';
import Footer from '../HomePage/Footer';
import RestaurantBody from './RestaurantBody';

function RestaurantPage(props){
    return(
        <div>
            <NavBar currentUser={props.currentUser}/>
            <br></br>
            <RestaurantBody obj = {props.data} />
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div>
    );
}

export default RestaurantPage;
