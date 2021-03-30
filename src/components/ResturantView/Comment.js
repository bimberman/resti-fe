
function Comment(props){

    const handleClick = (e) => {
        e.preventDefault();
        props.removeComment(props.review.id)
    }
    return(
        <div className="card p-3 mt-2">
            <div className=" row ">
                <div className="user col-1">
                    <img src={props.review.user.userImg} width="30" alt="user" className="user-img rounded-circle"></img>
                    <small className="font-weight-bold text-primary d-flex align-items-center ml-1">{props.review.user.username}</small>
                </div>
                <div className="user col-9">     
                    <span>
                        
                        <small className=" d-flex font-weight-bold"> {props.review.message}</small>
                    </span>
                </div>
                
                {/* <small>{props.review.user.role}</small> */} 
            </div>
            <div className= "row">
                <span className= "col-1  "></span>
                <span className= "col-5 d-flex">rating -date</span>     
            </div>
            <div className="action d-flex justify-content-between mt-2 align-items-center">
                <div className="px-5">
                    <span className = "remove">
                        <small onClick={handleClick}>Remove</small>
                    </span>
                </div>
                <div className="icons align-items-center"> </div>
            </div>
        </div>
    );
}

export default Comment;
