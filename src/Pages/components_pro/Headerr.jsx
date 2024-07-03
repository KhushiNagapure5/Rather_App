import React from "react";
import { NavLink } from "react-router-dom";

export default function Headerr(){
    return(
        <> 
            <div className="container">
                <div className="row">
                    <ul className="col-12 col-xs-12 col-md-12d-flex d-inline-block all_menu">
                        <li className="nav-item">
                            <NavLink className="nav-link m-3" to="/">All</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link m-3" to="/mobile">MOBILE APPS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link m-3" to="/custom">CUSTOM SOFTWARE</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link m-3" to="/testing">QA & TESTING</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link m-3" to="/usdesign">UX AND DESIGN</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}