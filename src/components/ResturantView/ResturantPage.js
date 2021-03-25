import NavBar from '../HomePage/NavBar';
import Footer from '../HomePage/Footer';
import ResturantBody from './ResturantBody';
import { useState } from 'react';


function ResturantPage({data}){
    const [obj, setObj] = useState(data);

    return(
        <div>
            <NavBar />
            <br></br>
            <ResturantBody obj = {obj}/>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div>
    );
}

export default ResturantPage;