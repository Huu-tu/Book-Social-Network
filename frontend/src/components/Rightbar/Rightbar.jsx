import React, {useEffect, useState} from "react";
import PostServices from "../../modules/Post/Service/service";

export default function Rightbar(){
  const [posts, setPost] = useState([]);

  const getValue = async() =>{
    await PostServices.showRanDomReadPosts()
    .then((res)=>{
      setPost(res.data);
      // console.log(res.data)
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
          <div className="card gedf-card">
            <div className="card-body">
              <h5 className="card-title">POPULAR POSTS</h5>
              <h6 className="card-subtitle mb-2 text-muted">dsa</h6>
              <p className="card-text">To create our list, we focused on the books Goodreads members can't wait to read, which we measure by how many times a book has been added to Want to Read shelves. All these top titles are now available in the United States! Which ones catch your eye?.</p>
              {/*<a href="#" className="card-link">Card link</a>*/}
              {/*<a href="#" className="card-link">Another link</a>*/}
            </div>
          </div>
      }
      <div className="card gedf-card">
        <div className="card-body">
          <h5 className="card-title">Popular quotes</h5>
          <h6 className="card-subtitle mb-2 text-muted">“Be yourself; everyone else is already taken.”</h6>
          <p className="card-text">― Oscar Wilde.</p>
          {/*<a href="#" className="card-link">Card link</a>*/}
          {/*<a href="#" className="card-link">Another link</a>*/}
        </div>
      </div>
    </div>
  )
}