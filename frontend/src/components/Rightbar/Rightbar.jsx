import React, {useEffect, useState} from "react";
import PostServices from "../../modules/Post/Service/service";

export default function Rightbar(){
  const [posts, setPost] = useState([]);

  const getValue = async() =>{
    await PostServices.showRanDomReadPosts()
    .then((res)=>{
      setPost(res.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getValue()
  },[posts])


  return(
    <div className="col-md-3">
              <div id="CarouselTest" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#CarouselTest" data-slide-to="0" class="active"></li>
            <li data-target="#CarouselTest" data-slide-to="1"></li>
            <li data-target="#CarouselTest" data-slide-to="2"></li>

          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="card-img" src="https://i.pinimg.com/564x/f2/34/d5/f234d5123c7dfc53660e8f68bc09cf0c.jpg" alt=""/>
            </div>
            <div class="carousel-item">
              <img class="card-img" src="https://picsum.photos/450/300?image=855" alt=""/>
            </div>
            <div class="carousel-item">
              <img class="card-img" src="https://i.pinimg.com/564x/df/3c/ae/df3caec6bff4d1a5e349c66a04a399ef.jpg" alt=""/>
            </div>
            <a class="carousel-control-prev" href="#CarouselTest" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
            <a class="carousel-control-next" href="#CarouselTest" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
          </div>
        </div>


      
        <div className="card gedf-card">
          <div className="card-body">
            <h5 className="card-title">LATEST POSTS</h5>
            <h6 className="card-subtitle mb-2 text-muted">f</h6>
            <p className="card-text">gf.</p>
            <a href="#" className="card-link">Read Posts</a>
            {/* {/*<a href="#" className="card-link">Another link</a> */}
          </div>
        </div>

        <div className="card gedf-card">
          <div className="card-body">
            <h5 className="card-title">Posts Saved</h5>
            <h6 className="card-subtitle mb-2 text-muted">“Be yourself; everyone else is already taken.”</h6>
            <p className="card-text">― Oscar Wilde.</p>
            {/*<a href="#" className="card-link">Card link</a>*/}
            {/*<a href="#" className="card-link">Another link</a>*/}
          </div> 
        </div>
    </div>
  )
}