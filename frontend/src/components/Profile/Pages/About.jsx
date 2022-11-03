import React from "react";
import "../Styles/ProfileAbout.css"
import moment from 'moment'


export default function About({dispatch, profile}){
  return(
    <div className="profileabout">
      <div className="profileabout-container">
        <div className="profileabout-contenttop">
          <h4 className="profileabout-contenttop-head">About Me:</h4>
        </div>
        <div className="profileabout-contentbottom">
          <div className="profileabout-contentbottominfo">
            <h6 className="profileabout-contentbottominfo-head"> Joined </h6>
            {/*<p className='profileabout-contentbottominfo-body'> {moment(user.createdAt).format('YYYY-MM-DD')}</p>*/}
          </div>
          <div className="profileabout-contentbottominfo">
            <h6 className="profileabout-contentbottominfo-head"> Gender </h6>
            <p className='profileabout-contentbottominfo-body'> {profile.gender}</p>
          </div>
          <div className="profileabout-contentbottominfo">
            <h6 className="profileabout-contentbottominfo-head"> Phone </h6>
            <p className='profileabout-contentbottominfo-body'> {profile.phone}</p>
          </div>
          <div className="profileabout-contentbottominfo">
            <h6 className="profileabout-contentbottominfo-head"> Email </h6>
            <p className='profileabout-contentbottominfo-body'> {profile.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}