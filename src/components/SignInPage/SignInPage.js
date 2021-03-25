import React from 'react';
import NavBar from '../HomePage/NavBar';
import Footer from '../HomePage/Footer';
import SignIn from './SignIn';

function SignInPage (){
    return(

        <div>
            <NavBar />
            <br></br>
            <br></br>
            <SignIn />
            <br></br>
            <br></br>
            <Footer />
        </div>
    );
}
export default SignInPage;