import React, {useEffect, useRef, useState} from "react";
import "../../Post/Styles/post.css";
import { BsFillTagFill, BsFillEmojiHeartEyesFill, BsPinMapFill, BsFillFileEarmarkImageFill} from "react-icons/bs";
import PostService from "../Service/service";

export default function CreatePost(){
  const description = useRef();
  const [file, setFile] = useState(null);
  const[data, setData] = useState({});

  const getValue = async ()=>{
    await PostService.getCurrentUser()
      .then((res) =>{
        // console.log(res.data)
        setData(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{
    getValue()
  },[])

  const handleChange = (event) =>{
    setFile(event.target.files[0])
  }

  const submitHandler = async(e)=>{
    e.preventDefault()

    //post
    const newPost = {
      authorId: data._id,
      authorName: data.fullName,
      description: description.current.value,
      image: file
    }

    await PostService.createPost(newPost)

    window.location.reload();
  }

  return(
    <>
      <div className="card gedf-card">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab"
                 aria-controls="posts" aria-selected="true">Make a publication</a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
              <div className="form-group">
                <input
                  className="shareInput"
                  id="message"
                  placeholder={"What's in your mind " + data.fullName + "?"}
                  ref={description}
                />
              </div>
            </div>
          </div>

          <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
              <div className="shareOption">
                <BsFillTagFill className="shareIcon"/>
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                <BsPinMapFill className="shareIcon"/>
                <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                <BsFillEmojiHeartEyesFill className="shareIcon"/>
                <span className="shareOptionText">Feelings</span>
              </div>
              <label htmlFor="image" className="shareOption">
                <BsFillFileEarmarkImageFill className="shareIcon"/>
                <span className="shareOptionText">Image</span>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="image"
                  name="image"
                  accept=".png,.jpeg,.jpg"
                  onChange={handleChange}
                />
              </label>
            </div>
            <button className="shareButton" type="submit">
              Share
            </button>
          </form>
        </div>
      </div>
    </>
  )
}