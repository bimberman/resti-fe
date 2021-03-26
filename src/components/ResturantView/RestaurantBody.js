import Comment from './Comment';
import CommentHeader from './CommentHeader';
import '../../css/CommentStyle.css';
import { useState } from 'react';
import AddComment from './AddComment';



function RestaurantBody(props){
    



    return(
        <div class = "container">
            <div className="card card-cascade  reverse">

            <div className="view view-cascade overlay">
                <br></br>
                <img className="card-img-top" src={props.obj.imgUrl}
                alt="Card cap"></img>
                <a href="#!">
                <div className="mask rgba-white-slight"></div>
                </a>
            </div>

            <div className="card-body card-body-cascade text-center">

                <h4 className="card-title"><strong>{props.obj.title}</strong></h4>
                <ul className="list-unstyled list-inline rating mb-0">
                    <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"> </i></li>
                    <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                    <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                    <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                    <li className="list-inline-item"><i className="fa fa-star-half-alt amber-text"></i></li>
                    <li className="list-inline-item"><p className="text-muted">{props.obj.rating} ({props.obj.numOfReviews})</p></li>
                </ul>
                <p className="card-text">{props.obj.description}</p>


            </div>
            <p className="ml-5">Phone Number: {props.obj.phoneNumber}</p>
            <p className="ml-5">Address: {props.obj.location}</p>
            <br></br>
            </div>
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">

                        <CommentHeader />
                        <hr></hr>

                        <Comment data = {props.obj}/>
                        <br></br>
                        <AddComment currentUser = {props.currentUser}/>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantBody;
