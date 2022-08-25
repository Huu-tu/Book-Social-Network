import {Http} from "../../../api/http";

const API_ENDPOINT = {
  SENDMESSAGE: "/chat/addMessage",
  RECIEVEMESSAGE: "/chat/getMessage",
  GETALLUSER: "/chat/allUsers"
}

class ChatServices{
  sendMessage(data){
    return Http.post(API_ENDPOINT.SENDMESSAGE, data)
  }

  recieveMessage(data){
    return Http.post(API_ENDPOINT.RECIEVEMESSAGE, data)
  }

  getAllUser(){
    return Http.get(API_ENDPOINT.GETALLUSER)
  }
}

const ChatService = new ChatServices();
export default ChatService;
