import React from "react";
import PostService from "../Service/service";
import { useSelector } from "react-redux";
import NotifyService from "../../../components/Notification/Service/service";

export default function ReactionPost({IdPost, IdAuthor, Description, IImage}){

  const Id_Post = IdPost
  const Author = IdAuthor
  const Content = Description
  const Image = IImage

  const onSubmitLike = async (event)=>{
    event.preventDefault();

    await PostService.likePost(Id_Post)

    //notify
    const newNotify = {
      content: Content,
      text:'Like the Post',
      url: `http://localhost:3000/detailPost/${Id_Post}`,
      recipient: Author,
      image: Image,
    }

    await NotifyService.createNotify(newNotify)
  }

  const onSubmitDisLike = async (event)=>{
    event.preventDefault();

    await PostService.disLikePost(Id_Post)

    //notify
    const newNotify = {
      content: Content,
      text:'DisLike the Post',
      url: `http://localhost:3000/detailPost/${Id_Post}`,
      recipient: Author,
    }

    await NotifyService.createNotify(newNotify)
  }

  const onSubmitShare = ()=> {
  }


  return(
    <>
      <div className="card-footer">
        <ul className="list-inline">
          <li className="list-inline-item">
            <form id="like-form" className="form-inline pull-right" onSubmit={onSubmitLike}>
              <button type="submit" className="btn btn-light contact">Like</button>
            </form>
          </li>
          <li className="list-inline-item">
            <form id="disLike-form" className="form-inline pull-right" onSubmit={onSubmitDisLike}>
              <button type="submit" className="btn btn-light contact">DisLike</button>
            </form>
          </li>
          <li className="list-inline-item">
            <form id="share-form" className="form-inline pull-right" onSubmit={onSubmitShare}>
              <button type="button" className="btn btn-light contact">Share</button>
            </form>
          </li>
        </ul>
      </div>
    </>
  )
}