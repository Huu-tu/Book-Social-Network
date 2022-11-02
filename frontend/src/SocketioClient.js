import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";

const SocketioClient = () => {
  const socket = useSelector((state) =>state.socket.value)
  const user= useSelector((state) =>state.profile.value)

  useEffect(()=>{
      socket?.emit('joinUser', user._id)
  },[socket,user._id])

  // useEffect(() =>{
  //
  // },[])

  return(
    <></>
  )
}

export default SocketioClient;