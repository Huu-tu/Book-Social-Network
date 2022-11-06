import React  from "react";
import HeaderAdmin from "./headerAdmin";
import LikeBarChart from "./likeBarChart";
import PieChart from "./pieChart";
import LineChart from "./lineChart";
import "../Styles/ChartAdmin.css";
import CmtBarChart from "./cmtBarChart";

export default function ChartAdmin(){
  return(
    <>
      <HeaderAdmin />
      <div className="chartAdmin">
        <div className="card BarChart">
          <div className="card-header">
            LikeBarChart
          </div>
          <div className="card-body">
            <LikeBarChart />
          </div>
        </div>
        <div className="card LineChart">
          <div className="card-header">
            LineChart
          </div>
          <div className="card-body">
            <CmtBarChart />
          </div>
        </div>
        <div className="row PieChart">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header">PieChart</div>
              <div className="card-body">
                <PieChart />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header">PieChart</div>
              <div className="card-body">
                <PieChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}