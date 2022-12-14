import React from "react";

export default function Rightbar(){
  return(
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
          <h6 className="card-subtitle mb-2 text-muted">âBe yourself; everyone else is already taken.â</h6>
          <p className="card-text">â Oscar Wilde.</p>
          {/*<a href="#" className="card-link">Card link</a>*/}
          {/*<a href="#" className="card-link">Another link</a>*/}
        </div>
      </div>
    </div>
  )
}