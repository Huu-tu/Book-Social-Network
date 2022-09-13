import React, {useEffect, useRef, useState} from "react";
import { io } from "socket.io-client";
import Contacts from "../Pages/Contacts";
import "../../../styles/chat.css"
import Header from "../../Header/Header";
import ChatContainer from "../Pages/ChatContainer";
import ChatService from "../Service/service";
import UserService from "../../Header/Service/service";
import ChatInput from "../Pages/ChatInput";

export default function Chat(){
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);

  useEffect(() =>{
    socket.current = io("ws://localhost:4000");
    socket.current.on("getMessage", data=>{
      setArrivalMessage({
        sender: data.senderId,
        content: data.content,
        createdAt: Date.now(),
      });

      // console.log(arrivalMessage.sender)
    })
  }, [])

  // useEffect(() => {
  //   arrivalMessage &&
  //   currentChat?.members.includes(arrivalMessage.sender) &&
  //   setMessages((prev) => [...prev, arrivalMessage]);
  // }, [arrivalMessage, currentChat]);


  const getCurrentUser = async () =>{
    await UserService.getCurrentUser()
      .then((res) =>{
        setCurrentUser(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  useEffect(() =>{
    getCurrentUser();
  });

  const getAllUser = async ()=>{
    await ChatService.getAllUser()
      .then((res) =>{
        setContacts(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  useEffect(()=>{
    getAllUser();
  },[])

  const handleChatChange = (chat) =>{
    setCurrentChat(chat);
  }

  const getValue = async ()=>{
    await ChatService.recieveMessage({
      from: currentUser._id,
      to: currentChat._id,
    })
      .then((res)=>{
        setMessages(res.data)
      })
  }

  useEffect(()=>{
    getValue()
  },[currentChat])

  useEffect(() =>{
    // console.log(contacts.username)
    socket.current.emit("addUser", contacts)
    socket.current.on("getUsers", users =>{
      console.log(users)
    })
  },[contacts])

  const handleSendMsg = async (msg) =>{
    await ChatService.sendMessage({
      from: currentUser._id,
      to: currentChat._id,
      content: msg,
    })

    // let receiverId = currentChat.members.find(
    //   (member) => member !== contacts._id
    // );

    socket.current.emit("send_message",{
      senderId: currentUser._id,
      receiverId: currentChat._id,
      content: msg
    })

    const msgs = [...messages];
    msgs.push({ fromSelf: true, chat: msg });
    setMessages(msgs);
  }

  return(
    <>
      <Header />
      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card chat-app">
              <Contacts users={contacts} changeChat={handleChatChange}/>
              {/*<ChatContainer*/}
              {/*  currentChat={currentChat} currentUser={currentUser}*/}
              {/*/>*/}

              <div className="chat">
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
                <ChatInput handleSendMsg={handleSendMsg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}