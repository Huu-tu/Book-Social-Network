import React, {useState} from "react";
import PostService from "../Service/service";
import { useSelector } from "react-redux";
import NotifyService from "../../../components/Notification/Service/service";

export default function CmtPost({IdPost, Author, Content, image}){
  const user = useSelector((state) =>state.profile.value)
  const socket = useSelector((state) =>state.socket.value)
  const Id_Post = IdPost;
  const AuthorId = Author
  const ContentText = Content
  const IImage = image
  const[input, setInput] = useState("");

  const handleChange = (event)=>{
    setInput(event.target.value);
  }

  const handleSubmit = async (event)=>{
    event.preventDefault();

    const newForm = {
      content: input,
      author: user._id,
      post: IdPost
    }

    const newNotify = {
      content: ContentText,
      text:'Comment the Post',
      url: `http://localhost:3000/detailPost/${Id_Post}`,
      recipient: AuthorId,
      image: IImage,
    }

    const res = await NotifyService.createNotify(newNotify)

    socket?.emit('createNotify',{
      ...res.data.notify,
      user:{
        user: user.fullName,
        avatar: image,
      }
    })

    await PostService.cmtPost(newForm);

    // window.location.reload();
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
      </div>

    </>
  )
}