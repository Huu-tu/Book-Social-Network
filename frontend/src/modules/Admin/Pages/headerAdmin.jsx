import React, { useEffect, useState} from "react";
import { BsFillChatDotsFill, BsSearch,BsBell, BsPersonCircle, BsClipboardData, BsFillBarChartLineFill, BsCardChecklist } from "react-icons/bs";
import "../Styles/HeaderAdmin.css"
import {useSelector} from 'react-redux';
import NotifyService from "../../../components/Notification/Service/service";
import UserService from "../../../components/Header/Service/service";

export default function HeaderAdmin(){
  const profile = useSelector((state) =>state.profile.value);
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
          setUsers(res.data.users)
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
          <form className="header-center input-group" >
            <div className="form-outline" style={{paddingTop: "3px"}}>
              <input type="text" id="form1" className="form-control" placeholder="Search Profiles" value={search} onChange={(e)=> setSearch(e.target.value)}/>
            </div>
            <div className="btn btn-primary" style={{marginBottom: "25px"}}>
              <BsSearch />
            </div>
            <div className="header-searchusers" style={{marginTop: "45px"}}>
              {
                search && users.length > 0 && users.map((item)=>(
                  <a className="card-link" href={`/profile/${item._id}`} key={item._id}>
                    <h5 className="card-title">{item.fullName}</h5>
                  </a>
                ))
              }
            </div>
          </form>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="/admin">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link page-scroll" href="/notification">
                  <BsBell/>
                  <span className="badge badge-secondary" style={{position:"absolute", transform:"translate(-10px,18px)",color:'white', fontSize:'10px'}}>{notify && notify.length}</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="/chat"><BsFillChatDotsFill/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="/chart"><BsFillBarChartLineFill/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="/managePosts"><BsCardChecklist/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="/manageUsers"><BsClipboardData/></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  <BsPersonCircle />
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href={`/profileAdmin/${profile._id}`}>{profile.fullName}</a>
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