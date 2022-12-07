import React, {useEffect, useState} from "react";
import {useSelector} from 'react-redux';
import "../../components/Notification/Styles/notification.css"
import Header from "../Header/Header";
import moment from 'moment'
import NotifyService from "../Notification/Service/service";

export default function Notification(){
  const [notify, setNotify] = useState([]);
  const user = useSelector((state) =>state.profile.value)

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

  const deleteAllNotify = async ()=>{
    if (user){
      const id = user._id
      await NotifyService.deleteAllNotifies(id)
    }else {
      console.log("Khong")
    }
  }

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
            {/*<form onSubmit={deleteAllNotify()}>*/}
              <button type="button" className="notifyText btn">
                <a href={"#myModal"}  data-toggle="modal">
                  Delete All
                </a>
              </button>
            {/*</form>*/}
          </div>
        </div>
      </div>

      <div id="myModal" className="modal fade">
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header" style={{backgroundColor:"#c94747"}}>
              <h4 className="modal-title">Confirmation</h4>
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete all notify? This action cannot be undone and you will be unable to
                recover any data.</p>
            </div>
            <div className="modal-footer">
              <a href="/notification" className="btn btn-info" data-dismiss="modal">Cancel</a>
              <a href="/notification" className="btn btn-danger" onClick={deleteAllNotify}>Yes, delete it!</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}