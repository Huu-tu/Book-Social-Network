import React from "react";
import BookService from "../Service/service";

export default function ReactionBook(IdBook){

  const Id_Book = IdBook

  const onSubmitLike = async (event)=>{
    event.preventDefault();

    // console.log(Id_Book);
    await BookService.likeBook(Id_Book)
  }

  const onSubmitDisLike = async (event)=>{
    event.preventDefault();

    await BookService.disLikeBook(Id_Book)
  }

  const onSubmitCmt = ()=>{

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
            <form id="share-form" className="form-inline pull-right" onSubmit={onSubmitCmt}>
              <button type="button" className="btn btn-light contact">Share</button>
            </form>
          </li>
        </ul>
      </div>

    </>
  )
}