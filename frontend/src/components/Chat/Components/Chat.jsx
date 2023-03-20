import React, {useEffect, useState} from "react";
import Contacts from "../Pages/Contacts";
import "../../../styles/chat.css"
import Header from "../../Header/Header";
import ChatService from "../Service/service";
import ChatInput from "../Pages/ChatInput";
import { useSelector } from "react-redux";
import ChatHeader from "../Pages/ChatHeader";
import pusherJs from "pusher-js";

export default function Chat(){
  const user = useSelector((state) =>state.profile.value)
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);
  const [messages, setMessages] = useState([]);

  //Get all User Online
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

  //Get current User
  const getValue = async ()=>{
    await ChatService.recieveMessage({
      from: user._id,
      to: currentChat._id,
    })
      .then((res)=>{
        setMessages(res.data)
        // console.log(res)
      })
  }

  useEffect(()=>{
    getValue()
  },[currentChat])

  //Pusher
  useEffect( () => {
    const pusher = new pusherJs("8856b27e23cd9a64d102", {
        cluster: "ap1",
        encrypted: true,
      });

      const channel = pusher.subscribe("messages");
       channel.bind("insert", (res) => {
      setMessages([...messages, res]); 
      // return console.log(res.chat);
    });


    return () => {
        channel.unbind_all();
        channel.unsubscribe();
    };
}, [messages]);


  //Send Msg
  const handleSendMsg = async (msg) =>{
    await ChatService.sendMessage({
      from: user._id,
      to: currentChat._id,
      content: msg,
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

              <div className="chat">
              <ChatHeader currentChat={currentChat} />
                <div className="chat-history" style={{ height:"500px" }}>
                  {
                    messages.map((item)=>(
                      <div >
                        <ul className="m-b-0">
                          <li className="clearfix" key={item.id}>
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