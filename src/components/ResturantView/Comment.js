
function Comment({data}){
    return(
                <div class="card p-3 mt-2">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="user d-flex flex-row align-items-center"> <img src={data.person.userImg} width="30" class="user-img rounded-circle mr-2"></img> <span><small class="font-weight-bold text-primary">{data.person.name}</small> <small class="font-weight-bold">{data.person.review}</small></span></div> <small>{data.person.userRole}</small>
                    </div>
                    <div class="action d-flex justify-content-between mt-2 align-items-center">
                        <div class="px-4"> <span class = "remove"><small>Remove</small></span> </div>
                        <div class="icons align-items-center"> </div>
                    </div>
                </div>
          
    );
}

export default Comment;