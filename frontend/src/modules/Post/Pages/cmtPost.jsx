import React, {useState} from "react";
import PostService from "../Service/service";

export default function CmtPost(IdPost){
  const Id_Post = IdPost;

  const[input, setInput] = useState(  "" );

  const handleChange = (event)=>{
    setInput(event.target.value);
  }

  const handleSubmit = async (event)=>{
    event.preventDefault();

    console.log(input)

    await PostService.cmtPost({ content: input,  id: Id_Post})

    setInput("")
  }

  return(
    <>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="comment">Comment</label>
            {/*<input type="text" id="comment" name="comment" className="form-control" onChange={handleCmtChange} value={input.content}/>*/}
            <input type="text" name="comment" onChange={handleChange} value={input.content}/>
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