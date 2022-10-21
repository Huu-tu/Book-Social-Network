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

function App() {
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

        {/*Roles*/}
        <Route path="admin" element={<Admin />} />
        <Route path="user" element={<User />} />

        {/*<Route path="main" element={<Main />}>*/}
        {/*  <Route path="admin" element={<Admin />} />*/}
        {/*  <Route path="employee" element={<Employee />} />*/}
        {/*  <Route path="user" element={<User />} />*/}
        {/*  <Route path="listBook" element={<ListBook />} />*/}
        {/*  <Route path="detailBook" element={<DetailBook />} />*/}
        {/*</Route>*/}
      </Routes>
    </div>
  );
}

export default App;
