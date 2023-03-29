import React, {useEffect, useState} from "react";
import EventService from "../Service/service";
import ListType from "../../Post/Pages/listType";
import moment from 'moment'

export default function ListEvent(){
  const[event,setEvent]=useState([]);

  const getValue = async ()=>{
    await EventService.showEvent()
    .then((res)=>{
      setEvent(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })

  }

  useEffect(()=>{
    getValue();
  },[event])

  return(
    <div className="col-md-6 gedf-main">
      <ListType />
      {
        event.map((item) =>(
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
                    <div className="h5 m-0">Huu Tu</div>
                  </div>
                </div>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-ellipsis-h"></i>
                    </button>
                    {/* <SavedPost IdPost={`${item._id}`} /> */}
                  </div>
                </div>
              </div>

            </div>
            <div class="card-group vgr-cards">
              <div class="card">
                <div class="card-img-body">
                  <img class="card-img2" src={`http://localhost:4000/img/` + `${item.image}`} alt="Card image cap"/>
                </div>
                <div class="card-body">
                <div className="text-muted h7 mb-2"><i className="fa fa-clock-o"></i>{moment(item.createAt).fromNow()}</div>
                  <h4 class="card-title">{item.title}.</h4>
                  <p class="card-text">{item.description}.</p>
                  <a href={`/detailPost/${item._id}`} class="btn btn-outline-primary">View</a>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}