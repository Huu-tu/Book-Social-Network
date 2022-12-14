import React from "react";
import moment from 'moment'
import {useSelector} from 'react-redux';

export default function ListPost(){
  const user = useSelector((state) =>state.profile.value)
  const socket= useSelector((state) =>state.socket.value)
  const posts = useSelector((state) =>state.post.value)

  const handleNotification = async (receiverName) =>{
    socket.emit("sendNotification", {
      senderName: user.fullName,
      receiverName: receiverName
    })
  }

  return(
    <div className="col-md-6 gedf-main">
      <button type="button" className="btn btn-outline-info"><a href={"/createPost"}>Create Post</a></button>
      {
        posts.map((item) =>(
          <div className="card gedf-card">
            <div className="card-header">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  {
                    item.avatar
                      ? <div className="mr-2">
                        <img className="rounded-circle" width="45" height="45" src={`http://localhost:4000/img/` + `${item.avatar}`} alt="" />
                      </div>
                    : <div className="mr-2">
                        <img className="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="" />
                      </div>
                  }

                  <div className="ml-2">
                    <div className="h5 m-0">{item.authorName}</div>
                  </div>
                </div>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-ellipsis-h"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                      <div className="h6 dropdown-header">Configuration</div>
                      <a className="dropdown-item" href="/">Save</a>
                      <a className="dropdown-item" href="/">Hide</a>
                      <a className="dropdown-item" href="/">Report</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="card-body">
              <div className="text-muted h7 mb-2"><i className="fa fa-clock-o"></i>{moment(item.createAt).fromNow()}</div>
              <a className="card-link" href={`/detailPost/${item._id}`}>
                <h5 className="card-title">{item.title}.</h5>
              </a>
            </div>
          </div>
        ))
      }
    </div>
  )
}