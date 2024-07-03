import React from "react";
import Header from "./Header.jsx";
import Home from "../Pages/Home.jsx";
import Services from "../Pages/Services.jsx";
import Projects from "../Pages/Projects.jsx";
import Team from "../Pages/Team.jsx";
import Contacts from "../Pages/Contacts.jsx";
import Footer from "./Footer.jsx";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App(){
    return(
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/services" element={<Services></Services>}></Route>
                    <Route path="/projects" element={<Projects></Projects>}></Route>
                    <Route path="/team" element={<Team></Team>}></Route>
                    <Route path="/contacts" element={<Contacts></Contacts>}></Route>
                </Routes>
                <Footer />
            </Router>
        </>
    )
}