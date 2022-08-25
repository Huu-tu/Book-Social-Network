import {
  Routes,
  Route,
} from "react-router-dom";
import {
  Login,
  Register,
  ListBook,
  DetailBook,
  CreateBook,
  Group,
  Discussion,
  PopularQuotes, Explore, Admin, Employee, User, News,
} from '../../modules/index';
import Home from "../Home/home";
import Main from "../Main/main";
import Chat from "../Chat/Components/Chat";

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

        {/*Book*/}
        <Route path="/listBook" element={<ListBook />} />
        <Route path="/detailBook/:id" element={<DetailBook />} />
        <Route path="/createBook" element={<CreateBook />} />
        <Route path="/updateBook" element={<ListBook />} />

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
        <Route path="employee" element={<Employee />} />
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
