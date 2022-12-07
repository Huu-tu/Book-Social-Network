import React, {useState} from "react";
import "../Styles/ProfileInfo.css";
import GlobalFriendBtn from "./GlobalFriendBtn";

export default function Info({ user, profile}){
  return(
    <>
      {
        user._id === profile._id ?
          <div className="profileinfo">
            <div className="profileinfo-container">
              <div className="profileinfo-top">
                <img src="https://i.pinimg.com/564x/79/34/af/7934af0db29d129ad2ea040e0939f8de.jpg" alt=""/>
              </div>
              <div className="profileinfo-center">
                {
                  profile.image ?
                    <img className="profileinfo-centeravatar" src={`http://localhost:4000/img/` + `${profile.image}`} alt=""/>
                    : <img className="profileinfo-centeravatar" src="https://picsum.photos/50/50" alt=""/>
                }
                <div className="profileinfo-centerbutton">
                  <h3 className="profileinfo-fullname">{profile.fullName}</h3>
                </div>
              </div>
              <div className="profileinfo-bottom">
                <div className="profileinfo-bottomcenter">
                  <h6 className="profileinfo-username">Friends: 88</h6>
                </div>
                <div className="profileinfo-bottomright">
                  <div className="profileinfo-stat">
                    <button type="button" className="profileinfo-statRight btn btn-secondary">
                      <a href={"/editProfile"}>Edit Profile</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          :  <div className="profileinfo">
            <div className="profileinfo-container">
              <div className="profileinfo-top">
                <img src="https://i.pinimg.com/564x/79/34/af/7934af0db29d129ad2ea040e0939f8de.jpg" alt=""/>
              </div>
              <div className="profileinfo-center">
                <img className="profileinfo-centeravatar"
                     src="https://i.pinimg.com/564x/c5/b5/50/c5b5501c6e48b0bd6b1a1c20de393d4c.jpg" alt=""/>
                <div className="profileinfo-centerbutton">
                  <h3 className="profileinfo-fullname">{user.fullName}</h3>
                </div>
              </div>
              <div className="profileinfo-bottom">
                <div className="profileinfo-bottomcenter">
                  <h6 className="profileinfo-username">Friends: 88</h6>
                </div>
                <div className="profileinfo-bottomright">
                   <div className="profileinfo-stat">
                  <button type="button" className="profileinfo-statRight btn btn-primary">
                    <a href={"/editProfile"}>Add Friend</a>
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
      }
      </>
  )
}