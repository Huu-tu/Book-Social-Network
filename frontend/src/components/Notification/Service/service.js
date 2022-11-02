import {Http} from "../../../api/http";

const API_ENDPOINT = {
  CREATENOTIFY: "/notify/createNotify",
  GETNOTIFY: "/notify/getNotify",
  REMOVENOTIFY: "/notify/removeNotify",
  ISREADNOTIFY: "/notify/isReadNotify",
  DELETEALLNOTIFY: "/notify/deleteAllNotify",
}

class NotifyServices{
  createNotify(data){
    return Http.post(API_ENDPOINT.CREATENOTIFY, data)
  }

  getNotify(){
    return Http.get(API_ENDPOINT.GETNOTIFY)
  }

  removeNotify(id){
    return Http.delete(API_ENDPOINT.REMOVENOTIFY + `/${id}`)
  }

  isReadNotify(id){
    return Http.patch(API_ENDPOINT.ISREADNOTIFY + `/${id}`)
  }

  deleteAllNotifies(){
    return Http.delete(API_ENDPOINT.DELETEALLNOTIFY)
  }
}

const NotifyService = new NotifyServices();
export default NotifyService;
