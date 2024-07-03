import React from "react";

export default function Services(){
    return(
        <>
            <div className="container" style={{marginTop:"7rem"}}>
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Services</h1>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 col-xs-12 col-md-6">
                        <img src="https://livedemo00.template-help.com/wt_51694/images/index-1-415x592.png" alt="" className="w-100 h-75" />
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="row mt-3">
                            <div className="col-12 col-xs-12 col-md-6">
                                <div className="card">
                                    <div className="card-body ">
                                        <h1>What we offer</h1>
                                        <button>VIEW ALL SERVICES</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xs-12 col-md-6">
                                <div className="card ">
                                    <div className="card-body">
                                        <h1>Corporate Solutions</h1>
                                        <p>Need specific software for your company? We are ready to develop it!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-xs-12 col-md-6">
                                <div className="card ">
                                    <div className="card-body">
                                        <h1>Call Center Solutions</h1>
                                        <p>Our experts provide custom products of any complexity for call centers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xs-12 col-md-6">
                                <div className="card ">
                                    <div className="card-body">
                                        <h1>Cloud Devlopment</h1>
                                        <p>We can also offer you reliable cloud development solutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-md-12 dev_app ">
                        <h1>Let's Develop Your Next Great App!</h1>
                        <p>Do you need a unique software solution for your company? We know how to help you!</p>
                        <button>GET IN TOUCH</button>
                        <button className="learn_more">LEARN MORE</button>
                    </div>
                </div>
            </div>    
        </>
    )
}