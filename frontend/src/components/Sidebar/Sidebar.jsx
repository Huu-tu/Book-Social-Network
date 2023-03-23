import React, {useEffect, useState} from "react";
import "./Sidebar.css";
import PostServices from "../../modules/Post/Service/service";

export default function Sidebar(){
  const [posts, setPost] = useState([]);
  const [postOne, setPostOne] = useState([]);

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


  const getValuePostOne = async() =>{
    await PostServices.showRanDomReadPosts()
    .then((res)=>{
      setPostOne(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getValuePostOne()
  },[postOne])

  return(
    <>
        <div className="col-md-3">
          {
            posts.map((item, index) =>(
              <div className="card" >
                <div className="card-body">
                  <div className="h5">MOST READING</div>
                  <div className="h7 text-muted">{item.title}</div>
                  {/* <div className="h7">{item.description}.</div> */}
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
          
          {
        postOne.map((item, index) =>(
        <div className="card gedf-card">
          <div className="card-body">
            <h5 className="card-title">LATEST POSTS</h5>
            <h6 className="card-subtitle mb-2 text-muted">{item.title}</h6>
            {/* <p className="card-text">{item.description}.</p> */}
            <a href="#" className="card-link">Read Posts</a>
            {/* {/*<a href="#" className="card-link">Another link</a> */}
          </div>
        </div>
        ))}
        </div>
    </>
  )
}