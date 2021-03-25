import Comment from './Comment';
import CommentHeader from './CommentHeader';
import '../../css/CommentStyle.css';
import { useState } from 'react';
import AddComment from './AddComment';



function ResturantBody({obj}){
    const [data, setObj] = useState(obj);



    return(
        <div class = "container">
            <div class="card card-cascade  reverse">

            <div class="view view-cascade overlay">
                <br></br>
                <img class="card-img-top" src={obj.imgUrl}
                alt="Card image cap"></img>
                <a href="#!">
                <div class="mask rgba-white-slight"></div>
                </a>
            </div>

            <div class="card-body card-body-cascade text-center">

                <h4 class="card-title"><strong>{obj.title}</strong></h4>
                <ul class="list-unstyled list-inline rating mb-0">
                    <li class="list-inline-item mr-0"><i class="fa fa-star amber-text"> </i></li>
                    <li class="list-inline-item mr-0"><i class="fa fa-star amber-text"></i></li>
                    <li class="list-inline-item mr-0"><i class="fa fa-star amber-text"></i></li>
                    <li class="list-inline-item mr-0"><i class="fa fa-star amber-text"></i></li>
                    <li class="list-inline-item"><i class="fa fa-star-half-alt amber-text"></i></li>
                    <li class="list-inline-item"><p class="text-muted">{obj.rating} ({obj.numOfReviews})</p></li>
                </ul>            
                <p class="card-text">{obj.description}</p>
                
            
            </div>
            <p class="ml-5">Phone Number: {obj.phoneNumber}</p>
            <p class="ml-5">Address: {obj.location}</p>  
            <br></br>      
            </div>
            <div class="container mt-5">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-8">

                        <CommentHeader />
                        <hr></hr>
                        
                        <Comment data = {data}/>
                        <br></br>
                        <AddComment/>
                       
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default ResturantBody;