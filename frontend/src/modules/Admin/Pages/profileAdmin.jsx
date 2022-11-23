import React, {useEffect, useState} from "react";
import { GrNotification } from 'react-icons/gr';
import "../Styles/ProfileAdmin.css"
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import HeaderAdmin from "./headerAdmin";
import Info from "../../../components/Profile/Pages/Info";
import About from "../../../components/Profile/Pages/About";
import SingleUserPosts from "../../../components/Profile/Pages/SingleUserPosts";
import ProfileService from "../../../components/Profile/Service/Service";

export default function ProfileAdmin(){
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
      <HeaderAdmin />
      {
        user._id === profile._id ?
          <div className="profile" style={{ marginTop: "70px" }}>
            <Info posts={posts} user={user} profile={profile} />
            <div className="profilebody">
              <div className="profilebody-left">
                <About profile={profile} />
              </div>
              <div className="profilebody-center">
                <SingleUserPosts user={profile}/>
              </div>
            </div>
          </div>
          :  <div className="profile" style={{ marginTop: "70px" }}>
            <Info posts={posts} user={user} profile={user} />
            <div className="profilebody">
              <div className="profilebody-left">
                <About profile={user} />
              </div>
              <div className="profilebody-center">
                <SingleUserPosts user={user}/>
              </div>
            </div>
          </div>
      }

    </>
  )
}