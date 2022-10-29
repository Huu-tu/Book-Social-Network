import React, {useEffect, useRef, useState} from "react";
import Header from "../Header/Header";
import Content from "../Content/Content";
import "./Main.css"
import Sidebar from "../Sidebar/Sidebar";
import Rightbar from "../Rightbar/Rightbar";
import {ListPost} from "../../modules";
import UserService from "../Header/Service/service";
import { useSelector, useDispatch } from "react-redux";
import {getDataUser} from "../../app/features/profile/profileSlice";
import {getDataSocket} from "../../app/features/socket/socketSlice";

export default function Main(){
  // const[socket,setSocket] = useState(io("http://localhost:4000"))
  // const[user,setUser] = useState("");
  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   socket.current = io("ws://localhost:4000");
  //   socket?.emit("addUser", user);
  // },[socket, user])


  // const getCurrentUser = async () =>{
  //   await UserService.getCurrentUser()
  //     .then((res) =>{
  //       setUser(res.data);
  //     })
  //     .catch((err)=>{
  //       console.log(err);
  //     })
  // }
  //
  // useEffect(() =>{
  //   getCurrentUser();
  // });
  // useEffect(()=>{
  //   dispatch(getDataUser(user))
  //   dispatch(getDataSocket(socket))
  // })

  // dispatch(getDataUser(user))
  // dispatch(getDataSocket(socket))

  return(
    <>
      <Header />
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