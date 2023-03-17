import React, {useEffect, useState} from "react";
import PostService from "../Service/service";

export default function ShowCmt(CmtPost){
  const id = CmtPost.CmtPost
  const [data,setData] = useState({
    content: "",
    author: ""
  })

  const getValue = async()=>{
    await PostService.cmtGet(id)
      .then((res) =>{
        setData(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{
    getValue()
  })

  const handleUpdate = async (id) =>{
    await PostService.cmtUpdatePost(id)

    window.location.reload();
  }

  const handleDelete = async (id) =>{
    await PostService.cmtDeletePost(id)

    window.location.reload();
  }

  return(
    <>
      <div>
        <h2>{data.author}</h2>
        <p>{data.content}</p>

        <button type="button" onClick={() => handleUpdate(data._id)}>Update</button>
        <button type="button" onClick={() => handleDelete(data._id)}>Delete</button>
      </div>
    </>
  )
}