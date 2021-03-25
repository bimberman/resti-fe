import React from "react";
import '../../css/AddCommentStyle.css';

  function AddComment(){
    return(
      
      <div class="row d-flex justify-content-center align-items-center rows">
      <div class="col-md-6">
          
              <div class="text-center">

                      <div class="input-group  "> <input type="text" class="form-control" placeholder="Write Review" aria-label="Recipient's username" aria-describedby="button-addon2"></input> <button class=" btn-primary border-rad" type="button" id="button-addon2">Add Review</button> </div>
                  </div>

          
      </div>
  </div>

    );
  }


export default AddComment;