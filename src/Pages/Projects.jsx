import React from "react";
import { NavLink } from "react-router-dom";
import Headerr from "./components_pro/Headerr";

export default function Projects(){
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div class="px-4 py-5 my-5 text-center">
                            <h1 class="display-5 fw-bold text-body-emphasis">Latest Projects</h1>
                            <div class="col-lg-6 mx-auto">
                                <p class="lead mb-4">In our portfolio, you can browse the latest products developed for our clients for different corporate purposes. Our qualified team of interface designers and software developers is always ready to create something unique for you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Headerr /> */}
            {/* <div className="container">
            <div className="row">
                <div className="col-6 imgg col-md-4">
                    <img src="https://livedemo00.template-help.com/wt_51694/images/fullwidth-gallery-1-420x350.jpg" className="pro_img" />
                </div>
                <div className="col-6 imgg col-md-4">
                    <img src="https://livedemo00.template-help.com/wt_51694/images/fullwidth-gallery-2-420x350.jpg" className="pro_img" />
                </div>
                <div className="col-6 imgg col-md-4">
                <img src="https://livedemo00.template-help.com/wt_51694/images/fullwidth-gallery-3-420x350.jpg" className="pro_img" />
                </div>
            </div>
            <div className="row">
                <div className="col-6 imgg col-md-4">
                    <img src="https://livedemo00.template-help.com/wt_51694/images/fullwidth-gallery-4-420x350.jpg" className="pro_img" />
                </div>
                <div className="col-6 imgg col-md-4">
                    <img src="https://livedemo00.template-help.com/wt_51694/images/fullwidth-gallery-5-420x350.jpg" className="pro_img" />
                </div>
                <div className="col-6 imgg col-md-4">
                <img src="https://livedemo00.template-help.com/wt_51694/images/fullwidth-gallery-6-420x350.jpg" className="pro_img" />
                </div>
            </div>
            <div className="row">
                <div className="col-6 imgg col-md-4">
                    <img src="https://livedemo00.template-help.com/wt_51694/images/fullwidth-gallery-7-420x350.jpg" className="pro_img" />
                </div>
                <div className="col-6 imgg col-md-4">
                    <img src="https://livedemo00.template-help.com/wt_51694/images/fullwidth-gallery-8-420x350.jpg" className="pro_img" />
                </div>
            </div>
            </div> */}

            <div className="container">
                <div className="row">
                    <div className="col-12 col-xs-12 col-md-4 exp_img">
                        <img src="https://lordicon.com/icons/wired/flat/2426-number-10.svg" style={{height:"100%", width:"100%"}} alt="" />
                    </div>
                    <div className="col-12 col-xs-12 col-md-3 exp" style={{marginTop:"5rem"}}>
                        <h1>Years Of Experience</h1>
                        <p>RatherApp is a team of highly experienced app designers and developers creating unique software for you.</p>
                        <button className="btn3">GET IN TOUCH</button>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="container expp">
                            <div className="row ">
                                <div className="col-6 col-md-6 expp1">
                                    <h1>2K</h1>
                                    <p>APPS DEVELOPED</p>
                                </div>
                                <div className="col-6 col-md-6 expp2">
                                    <h1>40</h1>
                                    <p>CONSULTANTS</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-md-6 expp3">
                                    <h1>12</h1>
                                    <p>AWARDS WON</p>
                                </div>
                                <div className="col-6 col-md-6 expp4">
                                    <h1>160</h1>
                                    <p>EMPLOYEES</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row logo">
                                <div className="col-12 col-md-3">
                                    <img src="https://livedemo00.template-help.com/wt_51694/images/clients-9-270x117.png" alt="" />
                                </div>
                                <div className="col-12 col-md-3">
                                    <img src="https://livedemo00.template-help.com/wt_51694/images/clients-10-270x117.png" alt="" />
                                </div>
                                <div className="col-12 col-md-3">
                                    <img src="https://livedemo00.template-help.com/wt_51694/images/clients-3-270x117.png"  alt=""/>
                                </div> 
                                <div className="col-12 col-md-3">
                                    <img src="https://livedemo00.template-help.com/wt_51694/images/clients-11-270x117.png" alt="" />
                                </div>
                            </div>

            </div>
        </>
    )
}