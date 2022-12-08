import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import {useSelector} from 'react-redux';
import PostService from "../../../modules/Post/Service/service";

export default function UpdateSingleUserPost(){
  let navigate  = useNavigate();
  const { id } = useParams();
  const profile = useSelector((state) =>state.profile.value)
  const[data, setData] = useState({});

  const getValue = async () =>{
    await PostService.detailPost(id)
      .then((res) =>{
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
    setData({...data, [event.target.name]: event.target.value});
  }

  const submitHandler = async(e)=>{
    e.preventDefault()

    //post
    const newPost = {
      _id: data._id,
      title: data.title,
      description: data.description,
    }

    await PostService.updatePost(newPost)

    navigate(`/profileAdmin/${profile._id}`)
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
          <form onSubmit={submitHandler}>
            <h3>Edit Post</h3>
            <div className="row justify-content-center" >
              <div className="col-8">
                  <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" name="title" className="form-control" style={{width: "400px"}} placeholder="Title *" onChange={handleChange} value={data.title}/>
                  </div>
                  <div className="form-group">
                    <textarea  id="description" name="description" className="form-control" placeholder="Content *"
                           style={{width: "400px", height: "150px"}} onChange={handleChange} value={data.description}></textarea>
                  </div>
                </div>
                  <div className="form-group">
                    <input type="submit" name="btnSubmit" className="btnContact" style={{marginLeft:"15px"}} value="Edit Post"/>
                  </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}