import React, {useContext, useEffect, useState} from "react";
import UserService from "./Service/service";
import { BsFillChatDotsFill, BsBell, BsPersonCircle, BsFillBookFill } from "react-icons/bs";
import Chat from "../Chat/Components/Chat";
import "./Styles/header.css"
import { useSelector } from "react-redux";

export default function Header(){

  const[data, setData] = useState({});
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  const handleLogOut = async () =>{
    localStorage.removeItem('token')
  }

  const getValue = async ()=>{
    await UserService.getCurrentUser()
      .then((res) =>{
        // console.log(res.data)
        setData(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{
    getValue()
  },[])

  // useEffect(()=>{
  //   socket.on("getNotification",value=>{
  //     setNotifications((prev) => [...prev, value]);
  //   })
  // },[socket])


  // const displayNotification = (fullName) =>{
  //   // console.log(fullName)
  //   return(
  //   //    <span className="notification">{`${senderName} like your post.`}</span>
  //     <span className="dropdown-item">{`${fullName.senderName} like your post.`}</span>
  //   )
  // }
  return(
    <>
      {/* Navigation  */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container">
          {/* Image Logo */}
          <a className="navbar-brand logo-text page-scroll" href="/main">Tivo</a>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="/main">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  <BsBell/>
                </a>
                <div className="dropdown-menu">
                  {/*{notifications.map((fullName) => displayNotification(fullName))}*/}
                  {/*    <span className="dropdown-item" >Groups</span>*/}
                  {/*    <span className="dropdown-item" >Discussions</span>*/}
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="/chat"><BsFillChatDotsFill/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="/createBook"><BsFillBookFill/></a>
              </li>
              {/*<li className="nav-item">*/}
              {/*  <a className="nav-link page-scroll" href="#features">My Books</a>*/}
              {/*</li>*/}
              {/*<li className="nav-item dropdown">*/}
              {/*  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">*/}
              {/*    Community*/}
              {/*  </a>*/}
              {/*  <div className="dropdown-menu">*/}
              {/*    <a className="dropdown-item" href="/group">Groups</a>*/}
              {/*    <a className="dropdown-item" href="/discussion">Discussions</a>*/}
              {/*    <a className="dropdown-item" href="/quote">Quotes</a>*/}
              {/*  </div>*/}
              {/*</li>*/}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
                  {/*     className="bi bi-person-circle" viewBox="0 0 16 16">*/}
                  {/*  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>*/}
                  {/*  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>*/}
                  {/*</svg>*/}
                  <BsPersonCircle />
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/profile">{data.fullName}</a>
                  <a className="dropdown-item" href="/discussion">Discussions</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/" onClick={handleLogOut}>Log out</a>
                </div>
              </li>
            </ul>
          </div>
        </div> {/* end of container */}
      </nav> {/* end of navbar */}
      {/* end of navigation  */}

    </>
  )
}