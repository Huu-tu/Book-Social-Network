import React, {useEffect, useState} from "react";
import {useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import "../../../modules/Post/Styles/createPost.css"
import "../../../modules/Post/Styles/post.css"
import ProfileService from "../Service/Service";

export default function EditProfile(){
  let navigate  = useNavigate();
  const profile = useSelector((state) =>state.profile.value)
  const[data, setData] = useState({
    fullName: ``,
    phone: ``,
    email: ``,
    gender: ``,
  });

  useEffect(()=>{
    setData({
      fullName: `${profile.fullName}`,
      phone: `${profile.phone}`,
      email: `${profile.email}`,
      gender: `${profile.gender}`,
    })
  },[profile])

  const handleChange = (event) =>{
    setData({...data, [event.target.name]: event.target.value});
  }

  const submitHandler = async(e)=>{
    e.preventDefault()

    //post
    const newPost = {
      _id: profile._id,
      fullName: data.fullName,
      phone: data.phone,
      email: data.email,
      gender: data.gender,
    }

    await ProfileService.updateProfile(newPost)

    navigate(`/profileAdmin/${profile._id}`)
    window.location.reload();
  }

  return(
    <>
      <div className="formMain">
        {/*<Header />*/}
        <div className="container contact-form" style={{ marginTop: "70px" }}>
          <div className="contact-image" >
            <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
          </div>
          <form  onSubmit={submitHandler}>
            <h3>Edit Profile</h3>
            <div className="row justify-content-center" >
              <div className="col-8">
                <div className="form-group">
                  <input type="text" name="fullName" className="form-control" placeholder="FullName *" onChange={handleChange} value={data.fullName}/>
                </div>
                <div className="form-group">
                  <input type="text" name="phone" className="form-control" placeholder="Phone *" onChange={handleChange} value={data.phone}/>
                </div>
                <div className="form-group">
                  <input type="text" name="email" className="form-control" placeholder="Email *" onChange={handleChange} value={data.email}/>
                </div>
                <div className="form-group">
                  <input type="text" name="gender" className="form-control" placeholder="Gender *" onChange={handleChange} value={data.gender}/>
                </div>
                <div className="form-group">
                  <input type="submit" name="btnSubmit" className="btnContact" value="Edit Profile"/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}