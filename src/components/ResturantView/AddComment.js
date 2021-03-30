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
        <div class="card">
        <div class="row ">
            <div class="col-2"> <img src="https://i.imgur.com/xELPaag.jpg" width="70" class="rounded-circle mt-2"></img> </div>
            <div class="col-10">
                <div class="comment-box ml-2">
                    <h4>Add a comment</h4>
                    <div class="rating"> <input type="radio" name="rating" value="5" id="5"></input><label for="5">☆</label> <input type="radio" name="rating" value="4" id="4"></input><label for="4">☆</label> <input type="radio" name="rating" value="3" id="3"></input><label for="3">☆</label> <input type="radio" name="rating" value="2" id="2"></input><label for="2">☆</label> <input type="radio" name="rating" value="1" id="1"></input><label for="1">☆</label> </div>
                    <div class="comment-area"> <textarea class="form-control" placeholder="what is your view?" rows="4"></textarea> </div>
                    <div class="comment-btns mt-2">
                        <div class="row">
                            <div class="col-6">
                                <div class="pull-left"> <button class="btn btn-success btn-sm">Cancel</button> </div>
                            </div>
                            <div class="col-6">
                                <div class="pull-right"> <button class="btn btn-success send btn-sm">Send <i class="fa fa-long-arrow-right ml-1"></i></button> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}


export default AddComment;
