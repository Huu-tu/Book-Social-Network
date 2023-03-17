import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import "./Styles/profile.css"
import Header from "../Header/Header";
import Info from "./Pages/Info";
import {useSelector} from 'react-redux';
import About from "./Pages/About";
import SingleUserPosts from "./Pages/SingleUserPosts";
import ProfileService from "./Service/Service";

export default function Profile(){
  const { id } = useParams();
  const profile = useSelector((state) =>state.profile.value)
  const posts = useSelector((state) =>state.post.value)
  const[user,setUser] = useState({})

  const getDataProfile = async ()=>{
    await ProfileService.detailProfile(id)
      .then((res) =>{
        setUser(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{
    getDataProfile()
    
  },[user])


  return(
    <>
      <Header />
      {
        user._id === profile._id ?
          <div className="profile" style={{ marginTop: "70px" }}>
            <Info user={user} profile={profile} />
            <div className="profilebody">
              <div className="profilebody-left">
                <About profile={profile} />
              </div>
              <div className="profilebody-center">
                <SingleUserPosts id={id}/>
              </div>
            </div>
          </div>
          :  <div className="profile" style={{ marginTop: "70px" }}>
            <Info user={user} profile={profile} />
            <div className="profilebody">
              <div className="profilebody-left">
                <About profile={user} />
              </div>
              <div className="profilebody-center">
                <div className="posts card">
                  <div className="card-header">
                    No Post Here
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      }
    </>
  )
}