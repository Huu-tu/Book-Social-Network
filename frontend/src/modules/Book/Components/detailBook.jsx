import React, {useEffect, useState} from "react";
import Header from "../../../components/Header/Header";
import {useNavigate, useParams} from "react-router-dom";
import BookService from "../Service/service";
import "../../../styles/detail.css";
import "../../../styles/cmt.css";
import ReactionBook from "../Pages/reactionBook";
import CmtBook from "../Pages/cmtBook";

export default function DetailBook(){
  let navigate = useNavigate();
  const { id } = useParams();
  const[data, setData] = useState({});

  const getValue = async () =>{
    // console.log(id)
    await BookService.detailBook(id)
      .then((res) =>{
        setData(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{
    getValue()
  },[data])

  return(
    <>
      <Header />
      {/*<p>{data.bookTitle}</p>*/}
      {/*<p>{data.description}</p>*/}
      <div className="container" style={{ marginTop: "60px" }}>
        <div className="col-lg-8 border p-3 main-section bg-white">
          <div className="row hedding m-0 pl-3 pt-0 pb-3">
            <button type="button" className="btn btn-primary" onClick={() => { navigate(-1) }}>Go Back</button>
          </div>
          <div className="row m-0">
            <div className="col-lg-4 left-side-product-box pb-3">
              <img src="https://i.pinimg.com/236x/97/0c/f9/970cf9ca427d0598a3a104014000fde6.jpg" className="border p-3" />
            </div>
            <div className="col-lg-8">
              <div className="right-side-pro-detail border p-3 m-0">
                <div className="row">
                  <div className="col-lg-12">
                    <h5>BookTitle</h5>
                    <p className="m-0 p-0">{data.bookTitle}</p>
                  </div>
                  <div className="col-lg-12">
                    <hr className="p-0 m-0" />
                  </div>
                  <div className="col-lg-12 pt-2">
                    <h5>Description</h5>
                    <span>{data.description}.</span>
                    <hr className="m-0 pt-2 mt-2" />
                  </div>
                  <div className="col-lg-12">
                    <p className="tag-section"><strong>Author : </strong>{data.author}</p>
                    <p className="tag-section"><strong>Language : </strong>{data.language}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ReactionBook IdBook={`${data._id}`} />
          <CmtBook IdBook={`${data._id}`} />
        </div>
      </div>
    </>
  )
}