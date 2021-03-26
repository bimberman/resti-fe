import React, { useState } from "react";
import '../../css/AddCommentStyle.css';

function AddComment(props) {

  const [message, setMessage] = useState();

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (!props.currentUser.username) {
      alert("You need to be signed in to write a review!");
      return;
    }

    if(message){
      props.setIdCounter(()=>{
        return ({
          restaurants: props.idCounter.restaurants,
          users: props.idCounter.users,
          reviews: ++props.idCounter.reviews
        })
      })
      props.reviews.push({
        id: props.idCounter.reviews,
        restaurantId: props.currentRestaurant.id,
        rating: 4.5,
        message: message,
        user: {
          ...props.currentUser,
          userImg: "http://brunoclaessens.com/wp-content/uploads/2015/07/Darth-Vader-Mumuye-head.jpg"
        }
      })
    }
  }

  return (
    <div className="row d-flex justify-content-center align-items-center rows">
      <div className="col-md-6">
        <div className="text-center">
          <div className="input-group  ">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Review"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={handleChange}>
            </input>
            <button
              className=" btn-primary border-rad"
              type="button"
              id="button-addon2"
              onClick={handleClick}>
              Add Review
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}


export default AddComment;
