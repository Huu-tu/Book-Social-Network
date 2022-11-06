import React from "react";
import HeaderAdmin from "./Pages/headerAdmin";
import Sidebar from "../../components/Sidebar/Sidebar";
import {ListPost} from "../index";
import Rightbar from "../../components/Rightbar/Rightbar";
import "./Styles/Admin.css";

export default function Admin(){
    return(
        <>
          <HeaderAdmin />
          <div className="container-fluid gedf-wrapper" style={{ marginTop: "100px" }}>
            <div className="row">
              <Sidebar />
              <ListPost/>
              <Rightbar />
            </div>
          </div>
        </>
    )
}