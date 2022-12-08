import React, {useEffect, useState} from "react";
import HeaderAdmin from "./headerAdmin";
import "../Styles/ManagePost.css"
import AccountService from "../../Auth/Service/service";
import moment from 'moment';

export default function BlockUsers(){
  const[users, setUsers] = useState([])

  const getValue = async()=>{
    await AccountService.trashAccount()
      .then((res)=>{
        setUsers(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{
    getValue()
  },[])

  const handleRestore = async (id) =>{
    await AccountService.restoreAccount(id)
  }

  return(
    <>
      <HeaderAdmin />
      <div className="ManagePost">
        <div className="card ManagePostTable">
          <div className="card-body ManagePostBody">
            <h4 className="card-title">Manage User</h4>
            <h6 className="card-subtitle mb-2 text-muted">Displayed data does not include user password.</h6>
            <a href="/manageUsers" className="btn btn-outline-info card-link">Go back</a>
            <br/>
            <br/>
            <table className="table align-middle mb-0 bg-white">
              <thead className="bg-light">
              <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Joined</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              {
                users.map((item,i)=>(
                  <tr key={i}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://i.pinimg.com/564x/45/98/07/459807a28fd2859b94a178b5d461288e.jpg"
                          alt=""
                          style={{width: "45px", height: "45px"}}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p className="fw-bold mb-1">{item.fullName}</p>
                          <p className="text-muted mb-0">{item.email}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{item.username}</p>
                    </td>
                    <td>
                      <span className="badge badge-success rounded-pill d-inline">{item.phone}</span>
                    </td>
                    <td>{item.gender}</td>
                    <td>{moment(item.createAt).fromNow()}</td>
                    <td>
                      <button type="button" className="btn btn-outline-info" onClick={() => handleRestore(item._id)}>Restore</button>
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