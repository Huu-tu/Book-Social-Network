import React, {useState} from "react";

export default function ChatInput({ handleSendMsg }){
  const [msg, setMsg] = useState("");

  const sendChange = (event) =>{
    setMsg(event.target.value);
  }

  const sendChat = (event) =>{
    event.preventDefault();
    handleSendMsg(msg);
    setMsg("");
  }

  return(
    <>
      <div className="chat-message clearfix">
        <form onSubmit={(event) => sendChat(event)}>
          <div className="input-group mb-0">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fa fa-send"></i></span>
            </div>
            <input type="text" className="form-control" placeholder="Enter text here..." onChange={(event) => sendChange(event)} value={msg}/>
          </div>
        </form>
      </div>

    </>
  )
}