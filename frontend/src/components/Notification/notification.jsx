import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import "../../components/Notification/Styles/notification.css"
import Header from "../Header/Header";
import moment from 'moment'
import NotifyService from "../Notification/Service/service";

export default function Notification(){
  const [notify, setNotify] = useState([]);

  const getNotify = async ()=>{
    await NotifyService.getNotify()
      .then((res)=>{
        setNotify(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{
    getNotify()
  },[])

  return(
    <>
      <Header />
      <div className="container justify-content-center d-flex flex-column-reverse" style={{ marginTop: "40px" }}>
          {
            notify.length > 0 && notify?.map((item,index)=>(
              <div className="notify mt-2 p-2" style={{ marginTop:"0px",marginBottom:"0px"}}>
              <div className="media mt-3">
                <img src={`http://localhost:4000/img/` + `${item.image}`} className="mr-3 sub-img" alt=""/>
                <div className="media-body">
                  <a className="card-link" href={`${item.url}`}>
                    <h6 className="notifyH6 mt-2 mb-0">{item.senders.fullName} {item.text}</h6>
                  </a>
                  <p className="notifyText mt-2 mb-0">{item.content}</p>
                  <small className="notifyText">{moment(item.createdAt).fromNow()}</small>
                </div>
              </div>
              </div>
            ))
          }
        <div className="notify mt-5 p-2" style={{ marginTop:"0px",marginBottom:"0px"}}>
          <div className="media-body">
            <h2 className="notifyH2 mt-2 mb-0">Notification</h2>
            <small className="notifyText">Delete All</small>
          </div>
        </div>
      </div>
    </>
  )
}