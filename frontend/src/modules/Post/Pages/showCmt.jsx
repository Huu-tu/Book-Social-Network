import React, {useEffect, useState} from "react";
import PostService from "../Service/service";

export default function ShowCmt(CmtPost){
  const id = CmtPost.CmtPost
  const [data,setData] = useState({
    content: "",
    author: ""
  })

  const getValue = async()=>{
    // console.log(id)
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

  return(
    <>
      <div>
        <h2>{data.author}</h2>
        <p>{data.content}</p>
      </div>
    </>
  )
}