import React from "react";
import PostService from "../Service/service";

export default function SavedPost({IdPost}){

  const handleSavePost = async (event) =>{
    event.preventDefault();

    await PostService.savePost(IdPost)

    window.location.reload();
  }

  const handleHidePost = async (event) =>{
    event.preventDefault();

    await PostService.hidePost(IdPost)

    window.location.reload();
  }

  const handleReportPost = async (event) =>{
    event.preventDefault();

    await PostService.reportPost()

    window.location.reload();
  }

  return(
    <>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
            <div className="h6 dropdown-header">Configuration</div>
            <a className="dropdown-item" href="/">
                <form onSubmit={handleSavePost}>
                    <button type="submit" className="btn">Save</button>
                </form>
            </a>
            {/* <a className="dropdown-item" href="/">
                <form onSubmit={handleHidePost}>
                    <button type="submit" className="btn">Hide</button>
                </form>
            </a> */}
            <a className="dropdown-item" href="/">
                <form onSubmit={handleReportPost}>
                    <button type="submit" className="btn">Report</button>
                </form>
            </a>
        </div>
    </>
  )
}