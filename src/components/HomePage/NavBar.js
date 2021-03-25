import { Link } from 'react-router-dom';
import Header from '../../img/header.png';
function NavBar(){
    return(
        
            <nav class="navbar navbar-light bg-light static-top">
                <div class="container">
                <Link to={'/'}><img src={Header} height = "50px"></img> Resti Review</Link>
                <Link to={'/Login'}><i class="fa fa-user-circle fa-2x"></i>&nbsp;&nbsp;Log In</Link>
                </div>
            </nav>
        
    );
}

export default NavBar;