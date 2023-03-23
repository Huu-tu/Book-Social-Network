import React, { useEffect, useState} from "react";
import UserService from "./Service/service";
import { BsFillChatDotsFill, BsBell, BsPersonCircle, BsSearch } from "react-icons/bs";
import "./Styles/header.css"
import {useSelector} from 'react-redux';
import pusherJs from "pusher-js";

export default function Header(){
  const profile = useSelector((state) =>state.profile.value)
  // const notify = useSelector((state) =>state.notify.data)
  const [notifications, setNotifications] = useState([]);
  const [search, setSearch] = useState('');
  const [users,setUsers]=useState([])

  const handleLogOut = async () =>{
    localStorage.removeItem('token')
  }

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

    }
  },[search])

  useEffect( () => {
    const pusher = new pusherJs("8856b27e23cd9a64d102", {
        cluster: "ap1",
        encrypted: true,
      });

      const channel = pusher.subscribe("notify");
       channel.bind("insert", (res) => {
        setNotifications([...notifications, res]); 
      // return console.log(res);
    });

    return () => {
        channel.unbind_all();
        channel.unsubscribe();
    };
}, [notifications]);

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
                <a className="nav-link page-scroll" href="/main">Home <span className="sr-only">(current)</span></a>
              </li>
              <li class="nav-item dropdown "> <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Messages<span>8</span></a>
					<div class="dropdown-menu notification" aria-labelledby="navbarDropdown">
						<div class="card">
							<div class="card-header"> inbox (8) <span> / Sent </span> <span><a class=""><i class="fas fa-edit"></i></a></span></div>
							<div class="card-body">
								<ul class="list-unstyled">
									<li class="media"> <img class="mr-3" src="" alt="" />
										<div class="media-body">
											<p>List-based media object</p></div>
									</li>
									
								</ul>
							</div>
						</div>
					</div>
				</li>
              <li className="nav-item dropdown">
                <a className="nav-link page-scroll" href="/notification">
                  <BsBell/>
                  <span className="badge badge-secondary" style={{position:"absolute", transform:"translate(-10px,18px)",color:'white', fontSize:'10px'}}>{notifications && notifications.length}</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="/chat"><BsFillChatDotsFill/></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  <BsPersonCircle />
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href={`/profile/${profile._id}`}>{profile.fullName}</a>
                  <a className="dropdown-item" href="/discussion">Your Posts</a>
                  <a className="dropdown-item" href="/discussion">Saved Posts</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/" onClick={handleLogOut}>Log out</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" ></a>
              </li>
            </ul>
          </div>
        </div> {/* end of container */}
      </nav> {/* end of navbar */}
    </>
  )
}