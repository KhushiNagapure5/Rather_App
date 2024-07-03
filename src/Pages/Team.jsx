import React from "react";

export default function Team(){
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="meet_team">Meet The Team</h1>
                    </div>
                </div>
                <div className="row team">
                    <div className="col-3 team1">
                        <div>
                            <h1>Ryan Wilson</h1>
                            <p>Director of Production</p>
                        </div>
                    </div>
                    <div className="col-3 team2">
                        <div>
                            <h1>Jill Peterson</h1>
                            <p>UI Designer</p>
                        </div>
                    </div>
                    <div className="col-3 team3">
                        <div>
                            <h1>Sam Robinson</h1>
                            <p>Senior Developer</p>
                        </div>
                    </div>
                    {/* <div className="col-3 team4">
                        <div>
                            <h1>Mary Lee</h1>
                            <p>Software Developer</p>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 pricing-header p-3 pb-md-4 mx-auto text-center">
                        <h1 className="display-4 fw-normal text-body-emphasis mt-5">Pricing</h1>
                    </div>        
                    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <div className="col-12 col-md-4 mt-5 mb-5 ">
                            <div className="card mb-4 rounded-3 shadow">
                            <div className="card-header py-3 text-bg-dark">
                                <h4 className="my-0 ">BASIC</h4>
                            </div>
                            <div className="card-body card2">
                                <h1 className="card-title pricing-card-title">$500.00</h1>
                                <h6 className="">STARTING AT</h6>
                                <ul className="list-unstyled mt-3 mb-4 text-start pack">
                                    <li><ion-icon name="play" style={{color:"#6689FF"}} ></ion-icon> Concept Devlopment</li>
                                    <li><ion-icon name="play" style={{color:"#6689FF"}} ></ion-icon> UI Design</li>
                                    <li style={{color:"grey"}}><ion-icon name="play" style={{color:"grey"}} ></ion-icon> Confugration managment</li>
                                    <li style={{color:"grey"}}><ion-icon name="play" style={{color:"grey"}} ></ion-icon> Software quality assurance</li>
                                    <li style={{color:"grey"}}><ion-icon name="play" style={{color:"grey"}} ></ion-icon> App intigration</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-dark ">GET STARTED</button>
                            </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-5 mb-5">
                            <div className="card mb-4 rounded-3 ">
                            <div className="card-header py-3 text-bg-primary">
                                <h4 className="my-0 fw-normal">Optimal</h4>
                            </div>
                            <div className="card-body card2">
                                <h1 className="card-title pricing-card-title">$800.00</h1>
                                <h6 className="">STARTING AT</h6>
                                <ul className="list-unstyled mt-3 mb-4 text-start pack">
                                    <li><ion-icon name="play" style={{color:"#6689FF"}} ></ion-icon> Concept Devlopment</li>
                                    <li><ion-icon name="play" style={{color:"#6689FF"}} ></ion-icon> UI Design</li>
                                    <li><ion-icon name="play" style={{color:"#6689FF"}} ></ion-icon> Confugration managment</li>
                                    <li><ion-icon name="play" style={{color:"#6689FF"}} ></ion-icon> Software quality assurance</li>
                                    <li style={{color:"grey"}}><ion-icon name="play"></ion-icon> App intigration</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-primary">GET STARTED</button>
                            </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-5 mb-5">
                            <div className="card mb-4 rounded-3  border-primary ">
                            <div className="card-header py-3 text-bg-dark">
                                <h4 className="my-0 fw-normal">ULTIMATE</h4>
                            </div>
                            <div className="card-body card2">
                                <h1 className="card-title pricing-card-title">$1200.00</h1>
                                <h6 className="">STARTING AT</h6>
                                <ul className="list-unstyled mt-3 mb-4 text-start pack">
                                    <li><ion-icon name="play" style={{color:"#6689FF"}}  ></ion-icon> Concept Devlopment</li>
                                    <li><ion-icon name="play" style={{color:"#6689FF"}}  ></ion-icon> UI Design</li>
                                    <li><ion-icon name="play" style={{color:"#6689FF"}}  ></ion-icon> Confugration managment</li>
                                    <li><ion-icon name="play" style={{color:"#6689FF"}}  ></ion-icon> Software quality assurance</li>
                                    <li><ion-icon name="play" style={{color:"#6689FF"}}  ></ion-icon> App intigration</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-dark">GET STARTED</button>
                            </div>
                            </div>
                        </div>
                        </div>        
                </div>
            </div>
        </>
    )
}