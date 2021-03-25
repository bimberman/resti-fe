import Header from './Header';
import NavBar from './NavBar';
import  OtherCard from './Card';
import Footer from './Footer';
import { useState } from 'react';

function HomePage({data}) {
  const [obj, setObj] = useState(data);
  return (
    <div>
      <NavBar />
      <Header/>
      <p>{obj.rating}</p>
      <br></br>
      <div className = "container">
      <div className = "row justify-content-center">
        
        <OtherCard obj ={obj}/>
 
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