import React from "react";

export default function AppFooter(){
    return(
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="lightseagreen" fillOpacity="1" d="M0,224L26.7,197.3C53.3,171,107,117,160,90.7C213.3,64,267,64,320,80C373.3,96,427,128,480,149.3C533.3,171,587,181,640,202.7C693.3,224,747,256,800,245.3C853.3,235,907,181,960,149.3C1013.3,117,1067,107,1120,122.7C1173.3,139,1227,181,1280,176C1333.3,171,1387,117,1413,90.7L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer-col first">
                            <h4>About Tivo</h4>
                            <p className="p-small">We're passionate about designing and developing one of the best marketing apps in the market</p>
                        </div>
                    </div> 
                    <div className="col-md-4">
                        <div className="footer-col middle">
                            <h4>Important Links</h4>
                            <ul className="list-unstyled li-space-lg p-small">
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Our business partners <a className="white" href="frontend/src/components/Home/Components/AppFooter#your-link">startupguide.com</a></div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Read our <a className="white" href="terms-conditions.html">Terms & Conditions</a>, <a className="white" href="privacy-policy.html">Privacy Policy</a></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-col last">
                            <h4>Contact</h4>
                            <ul className="list-unstyled li-space-lg p-small">
                                <li className="media">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="media-body">22 Innovative, San Francisco, CA 94043, US</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-envelope"></i>
                                    <div className="media-body"><a className="white" href="mailto:contact@tivo.com">contact@tivo.com</a> <i className="fas fa-globe"></i><a className="white" href="frontend/src/components/Home/Components/AppFooter#your-link">www.tivo.com</a></div>
                                </li>
                            </ul>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
        
        <div className="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="p-small">Copyright © 2020 <a href="https://inovatik.com">Template by Inovatik</a><br />
                        Distributed By <a  href="https://themewagon.com" target="_blank">ThemeWagon</a></p>
                    </div> 
                </div> 
            </div> 
        </div> 
        </>
    )
}