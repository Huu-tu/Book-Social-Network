import {
  Routes,
  Route,
} from "react-router-dom";
import {
  Login,
  Register,
  Group,
  Discussion,
  PopularQuotes, Explore, Admin, User, News,
} from '../../modules/index';
import Home from "../Home/home";
import Main from "../Main/main";
import Chat from "../Chat/Components/Chat";
import Profile from "../Profile/profile";
import Notification from "../Notification/notification";
import ListPost from "../../modules/Post/Components/listPost";
import CreatePost from "../../modules/Post/Pages/createPost";
import DetailPost from "../../modules/Post/Components/detailPost";
import {useDispatch} from 'react-redux';
import io from "socket.io-client";
import {useEffect, useState} from "react";
import {getDataSocket} from "../../app/features/socket/socketSlice";
import SocketioClient from "../../SocketioClient";
import UserService from "../Header/Service/service";
import PostService from "../../modules/Post/Service/service";
import {getDataUser} from "../../app/features/profile/profileSlice";
import {getDataPost} from "../../app/features/post/postSlice";
import ChartAdmin from "../../modules/Admin/Pages/chartAdmin";
import ManagePosts from "../../modules/Admin/Pages/managePosts";
import ManageUsers from "../../modules/Admin/Pages/manageUsers";

function App() {
  const dispatch = useDispatch();
  const[user,setUser] = useState({});
  const[data, setData] = useState([]);

  const getCurrentUser = async () =>{
    await UserService.getCurrentUser()
      .then((res) =>{
        setUser(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  useEffect(() =>{
    getCurrentUser();
  },[]);

  dispatch(getDataUser(user))

  const getPostValue = async ()=>{
    await PostService.showPost()
      .then((res) =>{
        setData(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{
    getPostValue()
  },[])

  dispatch(getDataPost(data))


  useEffect(()=>{
    const socket = io("http://localhost:4000");
    dispatch(getDataSocket(socket))
    return ()=>socket.close();
  },[dispatch])

  return (
    <div className="App">
      {<SocketioClient />}
      <Routes>
        {/*Intro*/}
        <Route path="/" element={<Home />} />

        {/*Auth*/}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/*Main*/}
        <Route path="/main" element={<Main />} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/notification" element={<Notification />}/>

        {/*Post*/}
        <Route path="/listBook" element={<ListPost />} />
        <Route path="/detailPost/:id" element={<DetailPost />} />
        <Route path="/createPost" element={<CreatePost />} />

        {/*Chat*/}
        <Route path="/chat" element={<Chat />}/>

        {/*Community*/}
        <Route path="/group" element={<Group />}/>
        <Route path="/discussion" element={<Discussion />}/>
        <Route path="/quote" element={<PopularQuotes />}/>

        {/*Explore*/}
        <Route path="/explore" element={<Explore />}/>
        <Route path="/news" element={<News />}/>

        {/*Admin*/}
        <Route path="admin" element={<Admin />} />
        <Route path="chart" element={<ChartAdmin />}/>
        <Route path="managePosts" element={<ManagePosts />}/>
        <Route path="manageUsers" element={<ManageUsers />}/>
        <Route path="user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
