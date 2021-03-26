import NavBar from '../HomePage/NavBar';
import Footer from '../HomePage/Footer';
import RestaurantBody from './RestaurantBody';
import { useState } from 'react';


function RestaurantPage({data}){
    const [obj] = useState(data);

    return(
        <div>
            <NavBar />
            <br></br>
            <RestaurantBody obj = {obj}/>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div>
    );
}

export default RestaurantPage;
