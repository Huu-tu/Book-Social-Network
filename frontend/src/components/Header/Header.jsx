import React, { useEffect, useState} from "react";
import UserService from "./Service/service";
import { BsFillChatDotsFill, BsBell, BsPersonCircle, BsFillBookFill, BsSearch } from "react-icons/bs";
import "./Styles/header.css"
import NotifyService from "../Notification/Service/service";
import {useSelector, useDispatch} from 'react-redux';
import UserCard from "./Pages/UserCard";

export default function Header(){
  const profile = useSelector((state) =>state.profile.value)
  const [notify, setNotify] = useState([]);
  const [search, setSearch] = useState('');
  const [users,setUsers]=useState([])

  const handleLogOut = async () =>{
    localStorage.removeItem('token')
  }

  const getNotify = async ()=>{
    await NotifyService.getNotify()
      .then((res)=>{
        setNotify(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{
    getNotify()
  },[])

  useEffect(()=>{
    if (search){
       UserService.searchUser(search)
        .then((res)=>{
          setUsers(res.data)
          console.log(res.data)
          // setSearch("")
        })
        .catch((err)=>{
          console.log("Khong search")
        })
    }else {
      console.log("Khong co")
    }
  },[search])

  return(
    <>
      {/* Navigation  */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container">
          {/* Image Logo */}
          <a className="navbar-brand logo-text page-scroll" href="/main">Tivo</a>
          <form className="header-center input-group" style={{marginLeft: "800px"}}>
            <div className="form-outline" >
              <input type="text" id="form1" className="form-control" placeholder="Search Profiles" value={search} onChange={(e)=> setSearch(e.target.value)}/>
            </div>
            <div className="btn btn-primary" >
              <BsSearch />
            </div>
            <div className="header-searchusers">
              {
                users.length > 0 && users.map((item)=>(
                  <p>{item.fullName}</p>
                  // <a href={`/profile/${item._id}`}>
                  //   {/*<UserCard user={item.fullName}/>*/}
                  //   {item.fullName}
                  // </a>
                ))
              }
            </div>
            {/*<div className="header-searchusers">*/}
            {/*  {*/}
            {/*    users.length > 0 && users.map((item)=>(*/}
            {/*      <a href={`/profile/${item._id}`}>*/}
            {/*        <UserCard user={item.fullName}/>*/}
            {/*      </a>*/}
            {/*    ))*/}
            {/*  }*/}
            {/*</div>*/}
          </form>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="/main">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
                {/*<a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">*/}
                {/*  <BsBell/>*/}
                {/*</a>*/}
                {/*<div className="dropdown-menu">*/}
                {/*  /!*{notifications.map((fullName) => displayNotification(fullName))}*!/*/}
                {/*  /!*    <span className="dropdown-item" >Groups</span>*!/*/}
                {/*  /!*    <span className="dropdown-item" >Discussions</span>*!/*/}
                {/*</div>*/}
                <a className="nav-link page-scroll" href="/notification">
                  <BsBell/>
                  <span className="badge badge-secondary" style={{position:"absolute", transform:"translate(-10px,18px)",color:'white', fontSize:'10px'}}>{notify && notify.length}</span>
                </a>
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
                  <a className="dropdown-item" href={`/profile/${profile._id}`}>{profile.fullName}</a>
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