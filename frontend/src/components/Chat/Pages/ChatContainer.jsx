import React, {useEffect, useState} from "react";
import ChatInput from "./ChatInput";
import ChatService from "../Service/service";

export default function ChatContainer({ currentChat, currentUser }){
  const [messages, setMessages] = useState([]);

  const getValue = async ()=>{
    await ChatService.recieveMessage({
      from: currentUser,
      to: currentChat,
    })
    .then((res)=>{
      setMessages(res.data)
    })
  }

  useEffect(()=>{
    getValue()
  },[currentChat])

  const handleSendMsg = async (msg) =>{
    await ChatService.sendMessage({
      from: currentUser,
      to: currentChat,
      content: msg,
    })

    const msgs = [...messages];
    msgs.push({ fromSelf: true, chat: msg });
    setMessages(msgs);
  }

  return(
    <>
      <div className="chat">
        <div className="chat-header clearfix">
          <div className="row">
            <div className="col-lg-6">
              <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
              </a>
              <div className="chat-about">
                <h6 className="m-b-0">{currentChat}</h6>
                <small>Last seen: 2 hours ago</small>
                <small>Last seen: 2 hours ago</small>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-history" style={{ height:"500px" }}>
            {
              messages.map((item)=>(
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
              ))
            }
        </div>
        <ChatInput handleSendMsg={handleSendMsg} />

      </div>
    </>
  )
}