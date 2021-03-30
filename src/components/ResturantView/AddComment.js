import React, { useEffect, useState } from "react";
import '../../css/AddCommentStyle.css';

function AddComment(props) {

  const [message, setMessage] = useState();
  useEffect((e) =>{
    document.getElementById("clearText").value = "";

  },[])
  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSendClick = (e) => {
    e.preventDefault();
    if (!props.currentUser.username) {
      alert("You need to be signed in to write a review!");
      return;
    }

    if(message){
      props.reviews.push({
        id: props.reviews.id,
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
        <div className="d-flex justify-content-center">
        <div class="comment-card">
        <div class="row ">
            <div class="col-10">
                <div class="comment-box ml-2">
                    <h4>Add A Review</h4>
                    <div class="rate"> <input type="radio" name="rate" value="5" id="5"></input><label for="5">☆</label> <input type="radio" name="rate" value="4" id="4"></input><label for="4">☆</label> <input type="radio" name="rate" value="3" id="3"></input><label for="3">☆</label> <input type="radio" name="rate" value="2" id="2"></input><label for="2">☆</label> <input type="radio" name="rate" value="1" id="1"></input><label for="1">☆</label> </div>
                    <div class="comment-area"> <textarea onChange={handleChange} class="form-control" placeholder="what is your view?" rows="3" id= "clearText"></textarea> </div>
                    <div class="comment-btns mt-2">
                        <div class="row">
                            <div class="col-6">
                                <div class="align-content-center"> <button onClick={handleSendClick} class="btn btn-primary send btn-sm">Send <i class="fa fa-long-arrow-right ml-1"></i></button> </div>
                            </div>
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
