function CommentHeader(){
    return(
        <div class="headings d-flex justify-content-between align-items-center mb-3">
            <h5>User Reviews</h5>

            <div class="buttons"> <span class="  d-flex flex-row align-items-center">Show Reviews&nbsp;&nbsp;
            <div class="switchToggle">
                <input type="checkbox" id="switch"></input>
                <label for="switch">Toggle</label>
            </div>
            </span> 
            </div>
              
        </div>  
    );
}

export default CommentHeader;