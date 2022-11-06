import React from "react";
import HeaderAdmin from "./headerAdmin";
import "../Styles/ManagePost.css"
import {useSelector} from 'react-redux';
import moment from 'moment';

export default function ManagePosts(){
  const posts = useSelector((state) =>state.post.value)
  return(
    <>
      <HeaderAdmin />
      <div className="ManagePost">
        <div className="card ManagePostTable">
          <div className="card-body ManagePostBody">
            <h4 className="card-title">Manage Post</h4>
            <h6 className="card-subtitle mb-2 text-muted">Displayed data does not include user password.</h6>

            <table className="table align-middle mb-0 bg-white">
              <thead className="bg-light">
              <tr>
                <th>Author Name</th>
                <th>Description</th>
                <th>CreateAt</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              {
                posts.map((item)=>(
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={`http://localhost:4000/img/` + `${item.image}`}
                          alt=""
                          style={{width: "45px", height: "45px"}}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p className="fw-bold mb-1">{item.authorName}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{item.description}</p>
                    </td>
                    <td>{moment(item.createAt).fromNow()}</td>
                    <td>
                      <button type="button" className="btn btn-link btn-sm btn-rounded">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              }
          </tbody>
        </table>
          </div>
        </div>
    </div>
    </>
  )
}