import React, {useState} from "react";
import { GrNotification } from 'react-icons/gr';
import "./Styles/profile.css"
import Header from "../Header/Header";
import Info from "./Pages/Info";
import {useSelector, useDispatch} from 'react-redux';
import About from "./Pages/About";
import SingleUserPosts from "./Pages/SingleUserPosts";

export default function Profile(){
  const dispatch = useDispatch();
  const profile = useSelector((state) =>state.profile.value)
  const posts = useSelector((state) =>state.post.value)

  return(
    <>
      <Header />
      <div className="profile" style={{ marginTop: "70px" }}>
        <Info posts={posts} dispatch={dispatch} profile={profile} />
         {/*<div className ="profileheader">*/}
        {/*  <div className="profileheader-items">*/}
        {/*    <button type="button" className="btn btn-outline-dark profileheader-items">Light</button>*/}
        {/*    <button type="button" className="btn btn-outline-dark">Light</button>*/}
        {/*    <button type="button" className="btn btn-outline-dark">Light</button>*/}
        {/*    <button type="button" className="btn btn-outline-dark">Light</button>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="profilebody">
          <div className="profilebody-left">
            <About dispatch={dispatch} profile={profile} />
          </div>
          <div className="profilebody-center">
            <SingleUserPosts />
          </div>
          {/*<div className="profilebody-right">*/}
          {/*  */}
          {/*</div>*/}
          </div>
      </div>
    </>
  )
}