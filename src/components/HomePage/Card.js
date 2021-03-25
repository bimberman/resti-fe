import { Link } from 'react-router-dom';
import '../../css/CardStyle.css';


function OtherCard({obj}){
    
    return(
        <div class="col-md-4">
        <div class="card booking-card">

        <div class="view overlay">
            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg" alt="Card image cap"></img>
            <div class="mask rgba-white-slight"></div>
        </div>

        <div class="card-body">

            <h4 class="card-title font-weight-bold">{obj.title}</h4>
            <ul class="list-unstyled list-inline rating mb-0">
                <li class="list-inline-item mr-0"><i class="fa fa-star amber-text"> </i></li>
                <li class="list-inline-item mr-0"><i class="fa fa-star amber-text"></i></li>
                <li class="list-inline-item mr-0"><i class="fa fa-star amber-text"></i></li>
                <li class="list-inline-item mr-0"><i class="fa fa-star amber-text"></i></li>
                <li class="list-inline-item"><i class="fa fa-star-half-alt amber-text"></i></li>
                <li class="list-inline-item"><p class="text-muted">{obj.rating} ({obj.numOfReviews})</p></li>
            </ul>
            <p class="mb-2">$ • {obj.foodGenre}</p>
            <p class="card-text">{obj.description}</p>
            <hr class="my-4"></hr>
            
            <Link className = "btn btn-primary  mx-0 mb-0" to = {'/Resturant'}>View</Link>

        </div>
        </div>
        </div>
    );
}

export  default OtherCard;