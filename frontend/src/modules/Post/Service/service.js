import {Http} from "../../../api/http";

const API_ENDPOINT = {
  GETSINGLEPOST: "/post/getSinglePost",
  SHOWPOST: "/post/showPost",
  DETAILPOST: "/post/detailPost",
  GETAUTHOR: "/post/getAuthor",
  CREATEPOST: "/post/createPost",
  UPDATEPOST: "/post/updatePost",
  DELETEPOST: "/post/deletePost",
  LIKEPOST: "/post/likePost",
  DISLIKEPOST: "/post/disLikePost",
  CMTGET: "/post/cmtGet",
  CMTPOST: "/post/cmtPost",
  GETCURRENTUSER: "/currentUser",
  GETIMG: "/img"
}

class PostServices{
  showPost(){
    return Http.get(API_ENDPOINT.SHOWPOST)
  }

  getAuthor(id){
    return Http.get(API_ENDPOINT.GETAUTHOR + `/${id}`)
  }

  detailPost(id){
    return Http.get(API_ENDPOINT.DETAILPOST + `/${id}`)
  }

  createPost(data){
    return Http.createPost(API_ENDPOINT.CREATEPOST, data)
  }

  getSinglePost(id){
    return Http.get(API_ENDPOINT.GETSINGLEPOST + `/${id}`)
  }

  getImg(img){
    return Http.get(API_ENDPOINT.GETIMG `/${img}`)
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

  cmtGet(id){
    return Http.get(API_ENDPOINT.CMTGET + `/${id}`)
  }

  cmtPost(data){
    return Http.putReactPost(API_ENDPOINT.CMTPOST, data)
  }
}

const PostService = new PostServices();
export default PostService;
