import React, {useState} from "react";

export default function Contacts({users, changeChat}){

  const changeCurrentChat = (contact) =>{
    changeChat(contact)
  }

  return(
    <>
      <div id="plist" className="people-list">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fa fa-search"></i></span>
          </div>
          <input type="text" className="form-control" placeholder="Search..." />
        </div>
        <ul className="list-unstyled chat-list mt-2 mb-0">
          {
            users.map((item, index) =>(
                <li className="clearfix" key={index} onClick={() =>{ changeCurrentChat(item.fullName) }}>
                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
                  <div className="about">
                    <div className="name">{item.fullName}</div>
                    <div className="status"><i className="fa fa-circle offline"></i> left 7 mins ago</div>
                  </div>
                </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}