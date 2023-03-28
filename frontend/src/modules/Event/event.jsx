import React from "react";
import Header from "../../components/Header/Header";
import "../../components/Main/Main.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";
import ListEvent from "./pages/listEvent";

export default function Event(){
  return(
    <>
      <Header />
      <div className="container-fluid gedf-wrapper" style={{ marginTop: "70px", backgroundColor:"#DCDCDC" }}>
        <div className="row" style={{paddingTop:"50px"}}>
          <Sidebar />
          <ListEvent/>
          <Rightbar />
        </div>
      </div>
    </>
  )
}