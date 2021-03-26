import Header from './Header';
import NavBar from './NavBar';
import  OtherCard from './Card';
import Footer from './Footer';

function HomePage(props) {
  return (
    <div>
      <NavBar currentUser={props.currentUser}/>
      <Header/>
      <p>{props.data.rating}</p>
      <br></br>
      <div className = "container">
      <div className = "row justify-content-center">

        <OtherCard obj ={props.data}/>

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
