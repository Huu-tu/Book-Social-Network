import React from "react";
import {
  Link,
  Outlet
} from 'react-router-dom';
import Header from "../Header/Header";
import Content from "../Content/Content";


export  default  function Main(){
  return(
    <>
      <Header />
      <Content />

      {/*<div>*/}
      {/*  <Link to="/main/listBook"> List </Link>*/}
      {/*  <Link to="/main/detailBook"> Detail </Link>*/}
      {/*</div>*/}
      {/*<Outlet />*/}
    </>
  )
}