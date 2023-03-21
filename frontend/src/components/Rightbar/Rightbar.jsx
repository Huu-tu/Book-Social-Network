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
      {
          posts.map((item, index) =>(
          <div className="card gedf-card">
            <div className="card-body">
              <h5 className="card-title">LATEST POSTS</h5>
              <h6 className="card-subtitle mb-2 text-muted">{item.title}</h6>
              <p className="card-text">{item.description}.</p>
              <a href="#" className="card-link">Read Posts</a>
              {/* {/*<a href="#" className="card-link">Another link</a> */}
            </div>
          </div>
        ))
      }
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