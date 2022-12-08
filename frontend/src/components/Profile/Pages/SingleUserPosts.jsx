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

  const handleDelete = async (id)=>{
    await PostService.deletePost(id)

    window.location.reload();
  }

  return(
    <>
      {
        post.map((item) =>(
          <div className="posts card" >
            <div className="card-header">
              <div className="d-flex justify-content-between align-items-center">
                <div className="ml-2">
                  <div className="h5 m-0">{item.title}</div>
                </div>
                <div className="dropdown">
                  <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-ellipsis-h"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                    <div className="h6 dropdown-header">Configuration</div>
                    <a className="dropdown-item" href={`/updateSingleUserPost/${item._id}`}>Update</a>
                    <button className="dropdown-item" onClick={() =>handleDelete(item._id)}>Delete</button>
                  </div>
                </div>
                </div>
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