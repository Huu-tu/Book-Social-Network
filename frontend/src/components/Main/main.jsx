import React from "react";
import Header from "../Header/Header";
import Content from "../Content/Content";
import "./Main.css"
import Sidebar from "../Sidebar/Sidebar";
import Rightbar from "../Rightbar/Rightbar";

export default function Main(){
  return(
    <>
      <Header />
      <div className="container-fluid gedf-wrapper" style={{ marginTop: "100px" }}>
        <div className="row">
          <Sidebar />
          <Content />
          <Rightbar />
        </div>
      </div>
    </>
  )
}