import Comment from './Comment';
import CommentHeader from './CommentHeader';
import '../../css/CommentStyle.css';
import { useState } from 'react';
import AddComment from './AddComment';



function RestaurantBody({obj}){
    const [data] = useState(obj);



    return(
        <div class = "container">
            <div className="card card-cascade  reverse">

            <div className="view view-cascade overlay">
                <br></br>
                <img className="card-img-top" src={obj.imgUrl}
                alt="Card cap"></img>
                <a href="#!">
                <div className="mask rgba-white-slight"></div>
                </a>
            </div>

            <div className="card-body card-body-cascade text-center">

                <h4 className="card-title"><strong>{obj.title}</strong></h4>
                <ul className="list-unstyled list-inline rating mb-0">
                    <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"> </i></li>
                    <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                    <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                    <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                    <li className="list-inline-item"><i className="fa fa-star-half-alt amber-text"></i></li>
                    <li className="list-inline-item"><p className="text-muted">{obj.rating} ({obj.numOfReviews})</p></li>
                </ul>
                <p className="card-text">{obj.description}</p>


            </div>
            <p className="ml-5">Phone Number: {obj.phoneNumber}</p>
            <p className="ml-5">Address: {obj.location}</p>
            <br></br>
            </div>
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">

                        <CommentHeader />
                        <hr></hr>

                        <Comment data = {data}/>
                        <br></br>
                        <AddComment/>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantBody;
