import React, {useEffect, useState} from "react";
import PostService from "../Service/service";

export default function CmtPost(IdPost,CmtPost){
  const Id_Post = IdPost;
  const[input, setInput] = useState("");
  const[user, setUser] = useState({});
  // console.log(Cmt_Post)

  const getValue = async ()=>{
    await PostService.getCurrentUser()
      .then((res) =>{
        // console.log(res.data)
        setUser(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{
    getValue()
  },[])

  const handleChange = (event)=>{
    setInput(event.target.value);
  }

  const handleSubmit = async (event)=>{
    event.preventDefault();

    // console.log({input, Id_Post})
    const newForm = {
      content: input,
      author: user._id,
      post: Id_Post.IdPost
    }

    await PostService.cmtPost(newForm)

    window.location.reload();
  }

  return(
    <>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="comment">Comment</label>
            {/*<input type="text" id="comment" name="comment" className="form-control" onChange={handleCmtChange} value={input.content}/>*/}
            <input type="text" name="comment" onChange={handleChange} value={input}/>
          </div>

          <button type="submit" className="btn btn-primary btn-block">Comment</button>
        </form>

        <div>
          <h2>Huutu</h2>
          <p>ádasd</p>
        </div>
      </div>

    </>
  )
}