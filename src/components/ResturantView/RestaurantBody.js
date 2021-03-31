import Comment from './Comment';
import CommentHeader from './CommentHeader';
import '../../css/CommentStyle.css';
import AddComment from './AddComment';
import { useState, useEffect } from "react";

function RestaurantBody(props){
    const [reviews, setReviews] = useState([]);
    
    const [rateNumber, setRateNumber] = useState(0);
    const [fullStars, setFullStars] = useState(0);

    useEffect(() => {
        setReviews(()=>[]);
        props.reviews.forEach(review => {
            if (review.restaurantId === props.currentRestaurant.id) {
                setReviews(prevState => ([
                    ...prevState,
                    review
                ]))
            }
        })
    }, [props.reviews, props.currentRestaurant])
    useEffect(
        () => {
            setRateNumber(props.currentRestaurant.rating);
               
        },[props.currentRestaurant.rating]
    )

    useEffect(() =>{
        let stars;

        if(rateNumber === 1){
        stars = (
                        <span>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                        </span>
                )
        }
        if(rateNumber === 2){
            stars = (
                        <div>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>

                        </div>
                    )
            }
        if(rateNumber === 3){
            stars = (
                        <span>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>

                        </span>
                    )
            }
        if(rateNumber === 3){
            stars = (
                        <span>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>

                        </span>
                    )
            }
        if(rateNumber === 4){
            stars = (
                        <span>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>

                            </span>
                    )
            }
        if(rateNumber === 5){
            stars = (
                        <span>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>

                        </span>
                    )
            }
        setFullStars(stars)
    }, [rateNumber])

    const removeComment = (id) => {
        if(props.currentUser.role==="admin"){
            props.setReviews(reviews.filter(review=>review.id!==id));
        }
    }

    return(
        <div className = "container">
            <div className="card card-cascade  reverse">
            <div className="view view-cascade overlay">
                <br></br>
                <img className="card-img-top"  width= "500px" src={props.currentRestaurant.imgUrl}
                alt="Card cap"></img>
                <a href="#!">
                <div className="mask rgba-white-slight"></div>
                </a>
            </div>
            <div className="card-body card-body-cascade text-center">
                <h4 className="card-title"><strong>{props.currentRestaurant.title}</strong></h4>
                <ul className="list-unstyled list-inline rating mb-0">
                    {fullStars}
                    &nbsp;
                    <li className="list-inline-item"><p className="text-muted">({props.currentRestaurant.numOfRating})</p></li>
                </ul>
                <p className="card-text">{props.currentRestaurant.description}</p>
            </div>
            <p className="ml-5">Phone Number: {props.currentRestaurant.phone}</p>
            <p className="ml-5">Address: {props.currentRestaurant.address}</p>
            <br></br>
            </div>
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <CommentHeader />
                        <hr></hr>
                        {
                            reviews.map(review => {
                                return (
                                    <div key={review.id}>
                                        <Comment
                                            review={review}
                                            removeComment={removeComment}/>
                                    </div>
                                )
                            })
                        }
                        <br></br>
                        <AddComment
                            currentUser = {props.currentUser}
                            currentRestaurant={props.currentRestaurant}
                            reviews={props.reviews}
                            idCounter={props.idCounter}
                            setIdCounter={props.setIdCounter}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantBody;
