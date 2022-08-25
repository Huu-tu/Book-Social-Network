import React from "react";
import Header from "../../../components/Header/Header";
import "../../../styles/news.css"
import {useNavigate} from "react-router-dom";

export default function News(){
  let navigate = useNavigate();

  return(
    <>
      <Header />
      <div className="container py-3" style={{ marginTop: "60px" }}>
        <div className="card">
          <div className="">
            <button type="button" className="btn btn-primary" onClick={() => { navigate(-1) }}>Go Back</button>
          </div>
          <div className="row ">
            <div className="col-md-7 px-3">
              <div className="card-block px-6">
                <h4 className="card-title">Horizontal Card with Carousel - Bootstrap 4 </h4>
                <p className="card-text">
                  The Carousel code can be replaced with an img src, no problem. The added CSS brings shadow to the card
                  and some adjustments to the prev/next buttons and the indicators is rounded now. As in Bootstrap 3
                </p>
                <p className="card-text">Made for usage, commonly searched for. Fork, like and use it. Just move the
                  carousel div above the col containing the text for left alignment of images</p>
                <br></br>
                <a href="#" className="mt-auto btn btn-primary">Read More</a>
              </div>
            </div>
            <div className="col-md-5">
              <img className="img-thumbnail" src="https://i.pinimg.com/564x/ae/af/33/aeaf33e6251cd3c9648534cd9b54bf99.jpg" alt="alternative" />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}