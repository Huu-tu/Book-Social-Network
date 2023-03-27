import React, {useEffect, useState} from "react";
import "../../Post/Styles/post.css";
import PostService from "../Service/service";
import "../Styles/createPost.css"
import {useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function CreatePost(){
  let navigate  = useNavigate();
  const [file, setFile] = useState(null);
  const[data, setData] = useState({
    title: "",
    description: "",
    type:""
  });
  const user = useSelector((state) =>state.profile.value);

  useEffect(()=>{
    // console.log(user)
  },[user])

  const handleChange = (event) =>{
    console.log({...data, [event.target.name]: event.target.value});
    setData({...data, [event.target.name]: event.target.value});
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }

  const submitHandler = async(e)=>{
    e.preventDefault()

    //post
    const newPost = {
      title: data.title,
      authorId: user._id,
      authorName: user.fullName,
      avatar: user.image,
      description: data.description,
      type: data.type,
      image: file
    }

    await PostService.createPost(newPost)

    navigate('/main')
    window.location.reload();
  }

  return(
    <>
      <div className="formMain">
        <div className="container contact-form" style={{ marginTop: "70px" }}>
          <button type="button" className="btn btn-primary" style={{marginTop: "10px"}} onClick={() => { navigate(-1) }}>Go Back</button>
          <div className="contact-image" >
            <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
          </div>
          <form  onSubmit={submitHandler}>
            <h3>Drop Us Your Idea</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" name="title" className="form-control" placeholder="Title *" onChange={handleChange} value={data.title}/>
                </div>
                <div className="form-group">
                  <input id="image" type="file" name="image" className="form-control" accept=".png,.jpeg,.jpg" onChange={handleChange}/>
                </div>
                <div className="form-group">
                <select id="exampleFormControlSelect1" name="type" class="form-control" value={data.type}  onChange={handleChange}>
                  <option >Select your type *</option>
                  <option value={'Opinion'}>Opinion</option>
                  <option value={'Book'} >Book</option>
                </select>
                </div>
                <div className="form-group">
                  <input type="submit" name="btnSubmit" className="btnContact" value="Create Post"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                <textarea  id="description" name="description" className="form-control" placeholder="Content *" onChange={handleChange} value={data.description}
                          style={{width: "100%", height: "150px"}}></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}