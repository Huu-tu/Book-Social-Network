import React, {useEffect, useState} from "react";
import "./Sidebar.css";
import PostServices from "../../modules/Post/Service/service";

export default function Sidebar(){
  const [posts, setPost] = useState([]);

  const getValue = async() =>{
    await PostServices.showMostReadPosts()
    .then((res)=>{
      setPost(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getValue()
  },[posts])

  return(
    <>
        <div className="col-md-3">
          {
            posts.map((item, index) =>(
              <div className="card" >
                <div className="card-body">
                  <div className="h5">MOST READING</div>
                  <div className="h7 text-muted">{item.title}</div>
                  <div className="h7">{item.description}.</div>
              </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="h6 text-muted">Author</div>
                <div className="h5">{item.authorName}</div>
              </li>
              <li className="list-group-item">
                <div className="h6 text-muted">Like</div>
                <div className="h5">{item.likes.length}</div>
              </li>
              <li className="list-group-item">
                <div className="h6 text-muted">Comments</div>
                <div className="h5">{item.comments.length}</div>
              </li>
            </ul>
          </div>
            ))
          }
          {/* <div className="card">
            <div className="card-body">
              <div className="h5">MOST READING</div>
              <div className="h7 text-muted">Eat, Pray, Love</div>
              <div className="h7">One Woman's Search for Everything Across Italy, India and Indonesia.
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="h6 text-muted">Like</div>
                <div className="h5">5.2342</div>
              </li>
              <li className="list-group-item">
                <div className="h6 text-muted">DisLike</div>
                <div className="h5">6758</div>
              </li>
              <li className="list-group-item">
                <div className="h6 text-muted">Comments</div>
                <div className="h5">7758</div>
              </li>
            </ul>
          </div> */}
        </div>
    </>
  )
}