import { Link } from 'react-router-dom';
import '../../css/CardStyle.css';


function OtherCard({obj}){

    return(
        <div className="col-md-4">
        <div className="card booking-card">

        <div className="view overlay">
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg" alt="Card cap"></img>
            <div className="mask rgba-white-slight"></div>
        </div>

        <div className="card-body">

            <h4 className="card-title font-weight-bold">{obj.title}</h4>
            <ul className="list-unstyled list-inline rating mb-0">
                <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"> </i></li>
                <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                <li className="list-inline-item"><i className="fa fa-star-half-alt amber-text"></i></li>
                <li className="list-inline-item"><p className="text-muted">{obj.rating} ({obj.numOfReviews})</p></li>
            </ul>
            <p className="mb-2">$ • {obj.foodGenre}</p>
            <p className="card-text">{obj.description}</p>
            <hr className="my-4"></hr>

            <Link className = "btn btn-primary  mx-0 mb-0" to = {'/Restaurant'}>View</Link>

        </div>
        </div>
        </div>
    );
}

export  default OtherCard;
