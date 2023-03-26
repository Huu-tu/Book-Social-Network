import React, {useEffect, useState} from "react";
import moment from 'moment';
import {useSelector} from 'react-redux';
import SavedPost from "../Pages/savedPost";
import Header from "../../../components/Header/Header";
import '../Styles/savedPost.css'
import PostService from "../Service/service";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Rightbar from "../../../components/Rightbar/Rightbar";

export default function ListSavedPosts(){
  const[data, setData] = useState([]);

  const getValue = async ()=>{
    await PostService.listSavedPost()
      .then((res)=>{
        setData(res.data)
        // console.log(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{
    getValue()
  },[])


  return(
    <>
    <Header />
    <div className="container-fluid gedf-wrapper" style={{ marginTop: "70px", backgroundColor:"#DCDCDC" }}>
      <div className="row" style={{paddingTop:"50px"}}>
      <Sidebar />
      <div className="col-md-6 gedf-main">
      <h1>List Saved Post</h1>
      <br/>
      <br/>
      {
        data.map((item) =>(
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
                    <SavedPost IdPost={`${item._id}`} />
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
    <Rightbar />
      </div>
    </div>
  </>
  )
}