import React from "react";
import '../../css/AddCommentStyle.css';

  function AddComment(){
    return(

      <div className="row d-flex justify-content-center align-items-center rows">
      <div className="col-md-6">

              <div className="text-center">

                      <div className="input-group  "> <input type="text" className="form-control" placeholder="Enter email" aria-label="Recipient's username" aria-describedby="button-addon2"></input> <button className="btn btn-primary border-rad" type="button" id="button-addon2">Add Review</button> </div>
                  </div>


      </div>
  </div>

    );
  }


export default AddComment;
