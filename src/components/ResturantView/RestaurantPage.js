import NavBar from '../HomePage/NavBar';
import Footer from '../HomePage/Footer';
import RestaurantBody from './RestaurantBody';
import { useState } from 'react';


function RestaurantPage(props){

    return(
        <div>
            <NavBar currentUser={props.currentUser}/>
            <br></br>
            <RestaurantBody obj = {props.data} currentUser = {props.currentUser}/>

            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div>
    );
}

export default RestaurantPage;
