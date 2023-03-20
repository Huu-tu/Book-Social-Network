import React, {useEffect, useState, useRef} from "react";
import ChatInput from "./ChatInput";
import ChatService from "../Service/service";
import { v4 as uuidv4 } from 'uuid';
import "../../../styles/chat.css";

export default function ChatContainer({ messages }){
  return(
    <>
      <div className="chat-history" style={{ height:"500px" }}>
                  {
                    messages.map((item)=>(
                      <div>
                        <ul className="m-b-0">
                          <li className="clearfix">
                            {/*<div className="message-data text-right">*/}
                            {/*  <span className="message-data-time">10:10 AM, Today</span>*/}
                            {/*  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />*/}
                            {/*</div>*/}
                            <div className={`message other-message ${item.fromSelf ? "float-right" : ""}`}>
                              {item.chat}
                            </div>
                          </li>
                        </ul>
                      </div>
                    ))
                  }
        </div>
    </>
  )
}