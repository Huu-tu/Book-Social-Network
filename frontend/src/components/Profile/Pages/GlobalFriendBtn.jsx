import React from "react";

export default function GlobalFriendBtn({classbtn}){
  return(
    <>
      <button className={classbtn} style={{backgroundColor:'crimson'}}>Un Friend</button>
      <button className={classbtn} >Add Friend</button>
    </>
  )
}