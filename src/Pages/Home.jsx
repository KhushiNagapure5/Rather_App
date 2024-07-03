import React from "react";
import Services from "./Services.jsx"
import Projects from "./Projects.jsx"
import Team from "./Team.jsx"
import Contacts from "./Contacts.jsx"

export default function Home(){
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="row">
                <div col-12>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://images.unsplash.com/photo-1588058365815-c96ac30ee30f?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vYmlsZSUyMGFuZCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D.jpg" className="d-block w-100" style={{height:"850px"}} alt="" />
                            <div class="carousel-caption caption d-none d-md-block">
                                <h1>Mobile App Devlopment</h1>
                                <p>Since our establishment, we have been delevering high-quality and sustainable<br /> softwaresolution for corporate purpose of worldwide businesses. </p>
                                <button>GET IN TOUCH</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1542744095-291d1f67b221?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D.jpg"  className="d-block w-100" style={{height:"850px"}} alt="" />
                            <div class="carousel-caption caption c1 d-flrf d-md-block">
                                <h1>Expirenced Team</h1>
                                <p>We are team qualified software developers,aimed at creating unique and <br /> powerful tools for your business & everyday life.</p>
                                <button>GET IN TOUCH</button>                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmclMjBvbiUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D.jpg" className="d-block w-100" style={{height:"850px"}} alt="" />
                            <div class="carousel-caption caption d-none d-md-block">
                                <h1>Award-Winning Software</h1>
                                <p>The software solution developed byour company have been numerously awarded <br />for usability and inovative features. </p>
                                <button>GET IN TOUCH</button>                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <Services />
        <Projects />
        <Team />
        <Contacts />
        </>
    )
}