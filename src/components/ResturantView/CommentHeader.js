function CommentHeader(){
    return(
        <div className="headings d-flex justify-content-between align-items-center mb-3">
            <h5>User Reviews</h5>

            <div className="buttons"> <span className="  d-flex flex-row align-items-center">Show Reviews&nbsp;&nbsp;
            <div className="switchToggle">
                <input type="checkbox" id="switch"></input>
                <label for="switch">Toggle</label>
            </div>
            </span>
            </div>

        </div>
    );
}

export default CommentHeader;
