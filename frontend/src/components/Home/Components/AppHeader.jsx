import React from "react";

export default function AppHeader(){
    return(
        <>
        {/* Navigation  */}
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container">
                {/* Image Logo */}
                <a className="navbar-brand logo-text page-scroll" href="/frontend/public">Tivo</a>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="frontend/src/components/Home/Components/AppHeader#header">HOME </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="frontend/src/components/Home/Components/AppHeader#description">DESCIPTION</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="frontend/src/components/Home/Components/AppHeader#details">DETAILS</a>
                    </li>

                    <li className="nav-item">
                        <a className="btn-outline-sm" href="/login">LOG IN</a>
                    </li>
                </ul>
                </div>
            </div> {/* end of container */}
        </nav> {/* end of navbar */}
        {/* end of navigation  */}


        {/* Header */}
        <header id="header" className="header">
        <div className="header-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-5">
                        <div className="text-container">
                            <h1>Deciding what to read next?</h1>
                            <p className="p-large">You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations. Join with us to discover and read more.</p>
                            <a className="btn-solid-lg page-scroll" href="/register">SIGN UP</a>
                        </div> {/* end of text-container  */}
                    </div> {/* end of col  */}
                    <div className="col-lg-6 col-xl-7">
                        <div className="image-container">
                            <div className="img-wrapper">
                                <img className="img-thumbnail" src="https://i.pinimg.com/564x/6c/43/bd/6c43bd441c736c6be664250040948bed.jpg" alt="alternative" />
                            </div> {/* end of img-wrapper  */}
                        </div> {/* end of image-container */}
                    </div> {/* end of col  */}
                </div>  {/* end of row  */}
            </div>{/* end of container  */}
        </div> {/* end of header-content  */}
        </header> {/* end of header  */}

        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5f4def" fillOpacity="1"
        d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,208C672,192,768,128,864,96C960,64,1056,64,1152,80C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path></svg>
        </>
    )
}