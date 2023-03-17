import React, { useEffect, useState } from 'react';
import ProfileService from "../Service/Service";
import {useSelector} from 'react-redux';

export default function GlobalFriendBtn({classbtn, user, profile}){
  const [friend,setFriend] = useState(false);

  useEffect(()=>{
    if(profile.following.includes(user._id)){
        setFriend(true)
    }
  },[profile.following,user._id])

  const addfriend = async () => {
    await ProfileService.addFriend(user._id)
    setFriend(true)
  }

  const removefriend = async () =>{
    await ProfileService.unFriend(user._id)
    setFriend(false)
  }

  return(
    <>
      { 
            friend ? 
            <button type="button" className="profileinfo-statRight btn btn-primary" onClick={removefriend}>
              Un Friend 
            </button>
            :<button type="button" className="profileinfo-statRight btn btn-primary" onClick={addfriend}>
              Add Friend
            </button>  
        }
    </>
  ) 
}