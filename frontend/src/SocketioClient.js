import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getDataNotify} from "./app/features/notify/notifySlice";

const SocketioClient = () => {
  const socket = useSelector((state) =>state.socket.value)
  const user= useSelector((state) =>state.profile.value)
  const dispatch = useDispatch();

  useEffect(()=>{
      socket?.emit('joinUser', user._id)
  },[socket,user._id])

  useEffect(()=>{
    socket?.on('createNotifyToClient', msg =>{
      dispatch(getDataNotify(msg))

      return ()=>socket.off('createNotifyToClient')
    })
  },[socket,dispatch])

  return(
    <></>
  )
}

export default SocketioClient;