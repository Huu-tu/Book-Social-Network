import React, {useState} from "react";
import "../../../styles/chat.css"

export default function ChatHeader({currentChat}){
    return(
        <>
        <div className="chat-header clearfix">
                <div className="row">
                    <div className="col-lg-6">
                      <a href="" data-toggle="modal" data-target="#view_info">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                      </a>
                      <div className="chat-about">
                        <h6 className="m-b-0">{currentChat.fullName}</h6>
                        <small>Last seen: 2 hours ago</small>
                      </div>
                    </div>
                </div>
        </div>
        </>  
    )
}