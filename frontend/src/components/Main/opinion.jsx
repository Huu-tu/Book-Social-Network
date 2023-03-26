import React from "react";
import Header from "../Header/Header";
import "./Main.css"
import Sidebar from "../Sidebar/Sidebar";
import Rightbar from "../Rightbar/Rightbar";
import ListOpinionPost from "../../modules/Post/Components/listOpinionPost";

export default function Opinion(){

  return(
    <>
      <Header />
      <div className="container-fluid gedf-wrapper" style={{ marginTop: "70px", backgroundColor:"#DCDCDC" }}>
        <div className="row" style={{paddingTop:"50px"}}>
          <Sidebar />
          <ListOpinionPost/>
          <Rightbar />
        </div>
      </div>
    </>
  )
}