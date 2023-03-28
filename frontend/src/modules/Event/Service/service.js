import {Http} from "../../../api/http";

const API_ENDPOINT = {
  SHOWEVENT: "/event/showEvent",
  DETAILEVENT: "/event/detailEvent",
  CREATEEVENT: "/event/createEvent",
  UPDATEEVENT: "/event/updateEvent",
  DELETEEVENT: "/event/deleteEvent",
  CMTDELETEPOST: "/post/cmtDeletePost",
  CMTUPDATEPOST: "/post/cmtUpdatePost",
  LIKEPOST: "/post/likePost",
  DISLIKEPOST: "/post/disLikePost",
  CMTGET: "/post/cmtGet",
  CMTPOST: "/post/cmtPost",
  SAVEPOST: "/post/savePost",
}

class EventServices{
  showEvent(){
    return Http.get(API_ENDPOINT.SHOWEVENT)
  }

  detailEvent(id){
    return Http.get(API_ENDPOINT.DETAILEVENT + `/${id}`)
  }

  createEvent(data){
    return Http.createPost(API_ENDPOINT.CREATEEVENT, data)
  }

  updateEvent(data){
    return Http.post(API_ENDPOINT.UPDATEEVENT, data)
  }

  deleteEvent(id){
    return Http.delete(API_ENDPOINT.DELETEEVENT + `/${id}`)
  }

  likePost(id){
    return Http.putReactPost(API_ENDPOINT.LIKEPOST, {id})
  }

  disLikePost(id){
    return Http.putReactPost(API_ENDPOINT.DISLIKEPOST, {id})
  }

  listSavedPost(){
    return Http.get(API_ENDPOINT.LISTSAVEDPOST)
  }

  savePost(id){
    return Http.putReactPost(API_ENDPOINT.SAVEPOST, {id})
  }

  hidePost(id){
    return Http.putReactPost(API_ENDPOINT.HIDEPOST, {id})
  }

  reportPost(id){
    return Http.putReactPost(API_ENDPOINT.REPORTPOST, {id})
  }

  cmtGet(id){
    return Http.get(API_ENDPOINT.CMTGET + `/${id}`)
  }

  cmtPost(data){
    return Http.putReactPost(API_ENDPOINT.CMTPOST, data)
  }

  cmtDeletePost(id){
    return Http.delete(API_ENDPOINT.CMTDELETEPOST + `/${id}`)
  }

  cmtUpdatePost(data){
    return Http.post(API_ENDPOINT.CMTUPDATEPOST, data)
  }
}

const EventService = new EventServices();
export default EventService;
