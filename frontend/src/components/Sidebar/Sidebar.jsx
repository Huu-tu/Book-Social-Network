import React from "react";
import "./Sidebar.css"

export default function Sidebar(){
  return(
    <>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <div className="h5">CURRENTLY READING</div>
              <div className="h7 text-muted">Eat, Pray, Love</div>
              <div className="h7">One Woman's Search for Everything Across Italy, India and Indonesia.
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="h6 text-muted">Rating</div>
                <div className="h5">5.2342</div>
              </li>
              <li className="list-group-item">
                <div className="h6 text-muted">Like</div>
                <div className="h5">6758</div>
              </li>
              <li className="list-group-item">
                <div className="h6 text-muted">DisLike</div>
                <div className="h5">7758</div>
              </li>
            </ul>
          </div>
        </div>
    </>
  )
}