import {
  Routes,
  Route,
} from "react-router-dom";
import {
  Login,
  Register, Admin, User,
} from '../../modules/index';
import Home from "../Home/home";
import Main from "../Main/main";
import Chat from "../Chat/Components/Chat";
import Profile from "../Profile/profile";
import Notification from "../Notification/notification";
import ListPost from "../../modules/Post/Components/listPost";
import ListSavedPosts from "../../modules/Post/Components/listSavedPosts";
import CreatePost from "../../modules/Post/Pages/createPost";
import DetailPost from "../../modules/Post/Components/detailPost";
import {useDispatch} from 'react-redux';
import {useEffect, useState} from "react";
import UserService from "../Header/Service/service";
import PostService from "../../modules/Post/Service/service";
import {getDataUser} from "../../app/features/profile/profileSlice";
import {getDataPost} from "../../app/features/post/postSlice";
import ChartAdmin from "../../modules/Admin/Pages/chartAdmin";
import ManagePosts from "../../modules/Admin/Pages/managePosts";
import ManageUsers from "../../modules/Admin/Pages/manageUsers";
import EditProfile from "../Profile/Pages/EditProfile";
import ProfileAdmin from "../../modules/Admin/Pages/profileAdmin";
import UpdateSingleUserPost from "../Profile/Pages/UpdateSingleUserPost";
import BlockUsers from "../../modules/Admin/Pages/blockUsers";
import Book from "../Main/book";
import Opinion from "../Main/opinion";
import Event from "../../modules/Event/event";
import CreateEvent from "../../modules/Event/pages/createEvent";
import DetailEvent from "../../modules/Event/pages/detailEvent";

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

  return (
    <div className="App">
      <Routes>
        {/*Intro*/}
        <Route path="/" element={<Home />} />

        {/*Auth*/}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/*Main*/}
        <Route path="/main" element={<Main />} />
        <Route path="/opinion" element={<Opinion />} />
        <Route path="/book" element={<Book />} />
        <Route path="/notification" element={<Notification />}/>

        {/*Profile*/}
        <Route path="/profile/:id" element={<Profile />}/>
        <Route path="/profileAdmin/:id" element={<ProfileAdmin />}/>
        <Route path="/editProfile" element={<EditProfile />}/>
        <Route path="/updateSingleUserPost/:id" element={<UpdateSingleUserPost />}/>

        {/*Post*/}
        <Route path="/listBook" element={<ListPost />} />
        <Route path="/detailPost/:id" element={<DetailPost />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/listSavedPosts" element={<ListSavedPosts />} />

        {/*Chat*/}
        <Route path="/chat" element={<Chat />}/>

        {/*Admin*/}
        <Route path="/event" element={<Event />}/>
        <Route path="/detailEvent/:id" element={<DetailEvent />}/>
        <Route path="/createEvent" element={<CreateEvent />}/>
        <Route path="/chat" element={<Chat />}/>

        {/*Admin*/}
        <Route path="admin" element={<Admin />} />
        <Route path="chart" element={<ChartAdmin />}/>
        <Route path="managePosts" element={<ManagePosts />}/>
        <Route path="manageUsers" element={<ManageUsers />}/>
        <Route path="blockUsers" element={<BlockUsers />}/>
        <Route path="user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
