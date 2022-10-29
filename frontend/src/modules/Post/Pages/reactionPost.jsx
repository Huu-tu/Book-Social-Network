import React from "react";
import PostService from "../Service/service";
import { useSelector } from "react-redux";

export default function ReactionPost(IdPost, UserName){
  const user = useSelector((state) =>state.profile.value)
  const socket= useSelector((state) =>state.socket.value)

  const Id_Post = IdPost
  const Author = UserName

  const onSubmitLike = async (event)=>{
    event.preventDefault();

    await PostService.likePost(Id_Post)
  }

  const onSubmitDisLike = async (event)=>{
    event.preventDefault();

    await PostService.disLikePost(Id_Post)
  }

  const onSubmitCmt = ()=> {


  }

    const handleNotification = async (receiverName) =>{
      socket.emit("sendNotification", {
        senderName: user.fullName,
        receiverName: receiverName
      })
    }

  return(
    <>
      <div className="card-footer">
        <ul className="list-inline">
          <li className="list-inline-item">
            <form id="like-form" className="form-inline pull-right" onSubmit={onSubmitLike}>
              <button type="submit" className="btn btn-light contact" onClick={() =>handleNotification(Author)}>Like</button>
            </form>
          </li>
          <li className="list-inline-item">
            <form id="disLike-form" className="form-inline pull-right" onSubmit={onSubmitDisLike}>
              <button type="submit" className="btn btn-light contact">DisLike</button>
            </form>
          </li>
          <li className="list-inline-item">
            <form id="share-form" className="form-inline pull-right" onSubmit={onSubmitCmt}>
              <button type="button" className="btn btn-light contact">Share</button>
            </form>
          </li>
        </ul>
      </div>
    </>
  )
}