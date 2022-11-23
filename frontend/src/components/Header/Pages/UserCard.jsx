import React from "react";
import "../Styles/header.css"

export default function UserCard({user}){
  let fullName = user
  return(
    <div className="userCard">
      {fullName}
    </div>
  )
}