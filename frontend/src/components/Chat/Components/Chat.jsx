import React, {useEffect, useRef, useState} from "react";
// import { io } from "socket.io-client";
import Contacts from "../Pages/Contacts";
import "../../../styles/chat.css"
import Header from "../../Header/Header";
import ChatContainer from "../Pages/ChatContainer";
import ChatService from "../Service/service";
import UserService from "../../Header/Service/service";

export default function Chat(){
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState({});

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

  useEffect()

  const getValue = async ()=>{
    await ChatService.getAllUser()
      .then((res) =>{
        setContacts(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  useEffect(()=>{
    getValue();
  },[])

  const handleChatChange = (chat) =>{
    setCurrentChat(chat);
  }

  return(
    <>
      <Header />

      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card chat-app">
              <Contacts users={contacts} changeChat={handleChatChange} />
              <ChatContainer
                currentChat={currentChat} currentUser={currentUser.fullName}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}