import React, {useEffect, useState} from "react";
import PostService from "../../Post/Service/service";
import CreatePost from "../Pages/createPost";
import { useSelector } from "react-redux";
import moment from 'moment'

export default function ListPost(){
  const[data, setData] = useState([]);
  const user = useSelector((state) =>state.profile.value)
  const socket= useSelector((state) =>state.socket.value)

  const handleNotification = async (receiverName) =>{
    socket.emit("sendNotification", {
      senderName: user.fullName,
      receiverName: receiverName
    })
  }

  const getValue = async ()=>{
    await PostService.showPost()
      .then((res) =>{
        setData(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{
    getValue()
  },[])

  return(
    <div className="col-md-6 gedf-main">
      <CreatePost />
      {
        data.map((item) =>(
          <div className="card gedf-card">
            <div className="card-header">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mr-2">
                    <img className="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="" />
                  </div>
                  <div className="ml-2">
                    <div className="h5 m-0">{item.authorName}</div>
                    {/*<div className="h7 m-0">Trending this week in one of your favorite genres, Business</div>*/}
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
              <div className="text-muted h7 mb-2"><i className="fa fa-clock-o"></i>{moment(item.createdAt).fromNow()}</div>
              <a className="card-link" href={`/detailPost/${item._id}`}>
                <h5 className="card-title">{item.description}.</h5>
              </a>
              {/*<p className="card-text">*/}
              {/*  {item.description}.*/}
              {/*</p>*/}
              {/*<div>*/}
              {/*  <span className="badge badge-primary">{item.author}</span>*/}
              {/*</div>*/}
            </div>
          </div>
        ))
      }
    </div>
  )
}