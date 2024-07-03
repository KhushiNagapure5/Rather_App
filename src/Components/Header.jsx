import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-expand-lg bg-light fixed-top">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="https://livedemo00.template-help.com/wt_51694/images/logo-default-223x50.png" alt="" /></a>
                    <button className="navbar-toggler toggler_btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                        <div className="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                        <a className="navbar-brand" href="#"><img src="https://livedemo00.template-help.com/wt_51694/images/logo-default-223x50.png" alt="" /></a>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                        <NavLink className="nav-link m-3 li_a active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link m-3 li_a" to="/services">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link m-3 li_a" to="/projects">Projects</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link m-3 li_a" to="/team">Team</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link m-3 li_a" to="/contacts">Contacts</NavLink>
                                </li>
                                <li className="nav-item mt-4 share">
                                    <ion-icon name="share-social-outline"></ion-icon>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        



        // <div className="container-fluid">
        //     <div className="row">
        //         <nav className="navbar navbar-expand-lg bg-body-tertiary">
        //             <div className="container-fluid">
        //                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //                 </button>
        //                 <div classNameName="col-6">
        //                     <a className="navbar-brand" href="#"><img src="https://livedemo00.template-help.com/wt_51694/images/logo-default-223x50.png" /></a>
        //                 </div>
        //                 <div className="col-6">
        //                     <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
        //                         <ul className="ull navbar-nav me-auto mb-2 mb-lg-0">
        //                             <li className="nav-item">
        //                                 <NavLink className="nav-link m-3 li_a active" aria-current="page" to="/">Home</NavLink>
        //                             </li>
        //                             <li className="nav-item">
        //                                 <NavLink className="nav-link m-3 li_a" to="/services">Services</NavLink>
        //                             </li>
        //                             <li className="nav-item">
        //                                 <NavLink className="nav-link m-3 li_a" to="/projects">Projects</NavLink>
        //                             </li>
        //                             <li className="nav-item">
        //                                 <NavLink className="nav-link m-3 li_a" to="/team">Team</NavLink>
        //                             </li>
        //                             <li className="nav-item">
        //                                 <NavLink className="nav-link m-3 li_a" to="/contacts">Contacts</NavLink>
        //                             </li>
        //                             <li className="nav-item mt-4 share">
        //                                 <ion-icon name="share-social-outline"></ion-icon>
        //                             </li>

        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //         </nav>
        //     </div>
        // </div>
    )
}