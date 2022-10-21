import React from "react";
import { GrNotification } from 'react-icons/gr';
import "./profile.css"
import Header from "../Header/Header";

export default function Profile(){
  return(
    <>
      <Header />
      <div className="profile" style={{ marginTop: "70px" }}>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={"https://i.pinimg.com/564x/ed/be/17/edbe17bdc91e621801dae0e380051783.jpg"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={"https://i.pinimg.com/564x/c5/b5/50/c5b5501c6e48b0bd6b1a1c20de393d4c.jpg"}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Huu tu</h4>
              <span className="profileInfoDesc">He is a goodboi</span>
            </div>
          </div>
          <div className="profileRightBottom">

          </div>
        </div>
      </div>
    </>
  )
}