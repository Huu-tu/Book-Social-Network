import React, {useEffect, useState} from "react";
import "../Styles/SingleUserPosts.css"
import PostService from "../../../modules/Post/Service/service";

export default function SingleUserPosts({id}){
  const[post,setPost] = useState([])

  const getSinglePost = async()=>{
    await PostService.getSinglePost(id)
      .then((res)=>{
        setPost(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{
    getSinglePost()
  },[post])

  return(
    <>
      {
        post.map((item) =>(
          <div className="posts card" >
            <div className="card-header">
              {item.title}
            </div>
            <div className="card-body">
              {/*<h5 className="card-title">Special title treatment</h5>*/}
              <p className="card-text">{item.description}.</p>
              <a href={`/detailPost/${item._id}`} className="btn btn-primary">Go Detail</a>
            </div>
          </div>
        ))
      }
    </>
  )
}