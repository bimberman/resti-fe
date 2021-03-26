
function Comment(props){

    const handleClick = (e) => {
        e.preventDefault();
        props.removeComment(props.review.id)
    }
    return(
        <div className="card p-3 mt-2">
            <div className="d-flex justify-content-between align-items-center">
                <div className="user d-flex flex-row align-items-center">
                    <img src={props.review.user.userImg} width="30" alt="user" className="user-img rounded-circle mr-2"></img>
                    <span>
                        <small className="font-weight-bold text-primary">{props.review.user.username}</small>
                        <small className="font-weight-bold">{props.review.message}</small>
                    </span>
                </div>
                <small>{props.review.user.role}</small>
            </div>
            <div className="action d-flex justify-content-between mt-2 align-items-center">
                <div className="px-4">
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
