import React, {useEffect, useState} from "react";
import Header from "../../../components/Header/Header";
import {useNavigate, useParams} from "react-router-dom";
import PostService from "../Service/service";
import "../Styles/detail.css";
import "../Styles/cmt.css";
import CmtPost from "../Pages/cmtPost";
import ReactionPost from "../Pages/reactionPost";
import { useSelector } from "react-redux";
import ShowCmt from "../Pages/showCmt";

export default function DetailPost(){
  let navigate = useNavigate();
  const { id } = useParams();
  const[data, setData] = useState({});
  // const socket= useSelector((state) =>state.socket.value)

  // useEffect(()=>{
  //   socket?.emit("addUser", user);
  // },[socket, user])

  const getValue = async () =>{
    await PostService.detailPost(id)
      .then((res) =>{
        setData(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  // console.log(data.comments)

  useEffect(()=>{
    getValue()
  },[data])

  return(
    <>
      <Header />
      <div className="container" style={{ marginTop: "60px" }}>
        <div className="col-lg-8 border p-3 main-section bg-white">
          <div className="row hedding m-0 pl-3 pt-0 pb-3">
            <button type="button" className="btn btn-primary" onClick={() => { navigate(-1) }}>Go Back</button>
          </div>
          <div className="row m-0">
            <div className="col-lg-4 left-side-product-box pb-3">
              <img src={`http://localhost:4000/img/` + `${data.image}`} className="border p-3" alt="" />
            </div>
            <div className="col-lg-8">
              <div className="right-side-pro-detail border p-3 m-0">
                <div className="row">
                  <div className="col-lg-12">
                    <h5>Author</h5>
                    <p className="m-0 p-0">{data.authorName}</p>
                  </div>
                  <div className="col-lg-12">
                    <hr className="p-0 m-0" />
                  </div>
                  <div className="col-lg-12 pt-2">
                    <h5>Title</h5>
                    <span>{data.title}.</span>
                    <hr className="m-0 pt-2 mt-2" />
                  </div>
                  <div className="col-lg-12 pt-2">
                    <h5>Description</h5>
                    <span>{data.description}.</span>
                    <hr className="m-0 pt-2 mt-2" />
                  </div>
                  {/*<div className="col-lg-12">*/}
                  {/*  <p className="tag-section"><strong>Author : </strong>{data.author}</p>*/}
                  {/*  <p className="tag-section"><strong>Language : </strong>{data.language}</p>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
          </div>

          <ReactionPost
            IdPost={`${data._id}`}
            IdAuthor={`${data.authorId}`}
            Description={`${data.description}`}
            IImage={`${data.image}`}
          />
          <CmtPost IdPost={`${data._id}`} CmtPost={`${data.comments}`}/>
          {
            data.comments?.map((comment)=>(
              <ShowCmt CmtPost={`${comment}`}/>
            ))
          }
        </div>
      </div>
    </>
  )
}