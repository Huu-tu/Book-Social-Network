import React, {useState} from "react";
import "../Styles/ProfileInfo.css";
import GlobalFriendBtn from "./GlobalFriendBtn";

export default function Info({ dispatch, profile, posts}){
  const [onEdit, SetOnEdit] = useState(false)

  return(
    <div className="profileinfo">
      <div className="profileinfo-container">
        <div className="profileinfo-top">
          <img src="https://i.pinimg.com/564x/79/34/af/7934af0db29d129ad2ea040e0939f8de.jpg" alt=""/>
        </div>
        <div className="profileinfo-center">
          <img className="profileinfo-centeravatar" src="https://i.pinimg.com/564x/c5/b5/50/c5b5501c6e48b0bd6b1a1c20de393d4c.jpg" alt=""/>
          <div className="profileinfo-centerbutton">
            <h3 className="profileinfo-fullname">{profile.fullName}</h3>
          </div>
          {/*<button className="profileinfo-centerbutton">*/}
          {/*  EDIT PROFILE*/}
          {/*</button>*/}
          {/*<GlobalFriendBtn classbtn="profileinfo-centerbutton" />*/}
        </div>
        <div className="profileinfo-bottom">
          <div className="profileinfo-bottomleft">
            {/*<div className="profileinfo-stat">*/}
            {/*  /!*<h6 className="profileinfo-statnumber">{user.friends.length}</h6>*!/*/}
            {/*  <h6 className="profileinfo-statdesc">FRIENDS</h6>*/}
            {/*</div>*/}
            <div className="profileinfo-stat">
              {/*<h6 className="profileinfo-statnumber">{user.following.length}</h6>*/}
              <h6 className="profileinfo-statdesc">FOLLOWING</h6>
            </div>
          </div>
          <div className="profileinfo-bottomcenter">
            {/*<h3 className="profileinfo-fullname">{profile.fullName}</h3>*/}
            {/*<h5 className="profileinfo-username">{profile.username}</h5>*/}
            <h6 className="profileinfo-username">FRIENDS</h6>
          </div>
          <div className="profileinfo-bottomright">
            <div className="profileinfo-stat">
              {/*<h6 className="profileinfo-statnumber">{post ? post.length : 0}</h6>*/}
              <h6 className="profileinfo-statdesc">POSTS</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}