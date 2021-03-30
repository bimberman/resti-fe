import React, { useState } from "react";
import '../../css/AddCommentStyle.css';

function AddComment(props) {

  const [message, setMessage] = useState();

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleCancelClick = (e) => {
    setMessage("")
  }

  const handleSendClick = (e) => {
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
    <div className="card">
      <form className="row">
          <div className="col-2"> <img src="https://i.imgur.com/xELPaag.jpg" width="70" alt="user" className="rounded-circle mt-2"></img> </div>
          <div className="col-10">
              <div className="comment-box ml-2">
                  <h4>Add a comment</h4>
                  <div className="rating"> <input type="radio" name="rating" value="5" id="5"></input><label for="5">☆</label> <input type="radio" name="rating" value="4" id="4"></input><label for="4">☆</label> <input type="radio" name="rating" value="3" id="3"></input><label for="3">☆</label> <input type="radio" name="rating" value="2" id="2"></input><label for="2">☆</label> <input type="radio" name="rating" value="1" id="1"></input><label for="1">☆</label> </div>
            <div className="comment-area"> <textarea className="form-control" placeholder="what is your view?" rows="4" onChange={handleChange}></textarea> </div>
                  <div className="comment-btns mt-2">
                      <div className="row">
                          <div className="col-6">
                  <div className="pull-left"> <button className="btn btn-success btn-sm" onClick={handleCancelClick}>Cancel</button> </div>
                          </div>
                          <div className="col-6">
                              <div className="pull-right"> <button className="btn btn-success send btn-sm" onClick={handleSendClick}>Send <i className="fa fa-long-arrow-right ml-1"></i></button> </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </form>
    </div>
  );
}


export default AddComment;
