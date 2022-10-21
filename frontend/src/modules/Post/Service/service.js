import {Http} from "../../../api/http";

const API_ENDPOINT = {
  SHOWPOST: "/post/showPost",
  DETAILPOST: "/post/detailPost",
  CREATEPOST: "/post/createPost",
  UPDATEPOST: "/post/updatePost",
  DELETEPOST: "/post/deletePost",
  LIKEPOST: "/post/likePost",
  DISLIKEPOST: "/post/disLikePost",
  CMTPOST: "/post/cmtPost",
  GETCURRENTUSER: "/currentUser",
}

class PostServices{
  showPost(){
    return Http.get(API_ENDPOINT.SHOWPOST)
  }

  detailPost(id){
    return Http.get(API_ENDPOINT.DETAILPOST + `/${id}`)
  }

  createPost(data){
    return Http.post(API_ENDPOINT.CREATEPOST, data)
  }

  updatePost(id, data){
    return Http.post(API_ENDPOINT.UPDATEPOST + `?id=${id}`, data)
  }

  deletePost(id){
    return Http.delete(API_ENDPOINT.DELETEPOST + `?id=${id}`)
  }

  likePost(id){
    return Http.putReactPost(API_ENDPOINT.LIKEPOST, {id})
  }

  disLikePost(id){
    return Http.putReactPost(API_ENDPOINT.DISLIKEPOST, {id})
  }

  getCurrentUser(){
    return Http.get(API_ENDPOINT.GETCURRENTUSER)
  }

  cmtPost(data){
    return Http.putReactPost(API_ENDPOINT.CMTPOST, data)
  }
}

const PostService = new PostServices();
export default PostService;
