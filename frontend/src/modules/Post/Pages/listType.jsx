import React from "react";
import "../Styles/listType.css";

export default function ListType(){

  return(
    <div className="card gedf-card cardBody">
        <ul className="ul1">
            <li className="li1"><a href="/main">All Post</a></li>
            <li className="li1"><a href="/opinion">Opinion</a></li>
            <li className="li1"><a href="/book">Books</a></li>
            <li className="li1"><a href={"/event"}>Events</a></li>
        </ul>
    </div>
  )
}