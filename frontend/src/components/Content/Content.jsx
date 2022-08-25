import React from "react";
import {ListBook} from "../../modules";

export default function Content(){
  return(
    <>
      <div className="container-fluid gedf-wrapper" style={{ marginTop: "100px" }}>
        <div className="row">
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

          <div className="col-md-6 gedf-main">
            <ListBook />
          </div>

          <div className="col-md-3">
            <div className="card gedf-card">
              <div className="card-body">
                <h5 className="card-title">NEWS & INTERVIEWS</h5>
                <h6 className="card-subtitle mb-2 text-muted">6 Great Books Hitting Shelves This Week</h6>
                <p className="card-text">To create our list, we focused on the books Goodreads members can't wait to read, which we measure by how many times a book has been added to Want to Read shelves. All these top titles are now available in the United States! Which ones catch your eye?
                  .</p>
                {/*<a href="#" className="card-link">Card link</a>*/}
                {/*<a href="#" className="card-link">Another link</a>*/}
              </div>
            </div>
            <div className="card gedf-card">
              <div className="card-body">
                <h5 className="card-title">Popular quotes</h5>
                <h6 className="card-subtitle mb-2 text-muted">“Be yourself; everyone else is already taken.”</h6>
                <p className="card-text">― Oscar Wilde.</p>
                {/*<a href="#" className="card-link">Card link</a>*/}
                {/*<a href="#" className="card-link">Another link</a>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}