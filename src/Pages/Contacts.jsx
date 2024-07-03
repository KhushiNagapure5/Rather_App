import React from "react";

export default function Contacts(){
    return(
        <>
            <div className="container" style={{marginTop:"7rem"}}>
                {/* <div className="row text-center">
                    <div className="col-4 col-xs-12 col-md-4 info ">
                        <div className="iconn">
                        <ion-icon name="phone-portrait-outline" className=""></ion-icon>
                        </div>
                        <h5>+1 323-913-4688<br></br>
                            +1 323-888-4554</h5>
                    </div>
                    <div className="col-4 col-xs-12 col-md-4 info">
                        <div className="iconn">
                        <ion-icon name="home-outline" className=""></ion-icon>
                        </div>
                        <h5>4730 Crystal Springs Dr, Los Angeles, CA 90027</h5>
                    </div>
                    <div className="col-4 col-xs-12 col-md-4 info">
                        <div className="iconn">
                        <ion-icon name="chatbubbles-outline" className=""></ion-icon>
                        </div>
                        <h5>mail@demolink.org<br></br>
                            info@demolink.org</h5>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Contact Us</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-3 col-md-3 get">
                        <h1>Get In Touch</h1>
                    </div>
                    <div className="col-xs-9 col-md-9">
                        <h5 className="gett">If you have any questions, just fill in the contact form, and we will answer you shortly.</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <input type="text" className="name" placeholder="Your Name" />
                    </div>
                    <div className="col-xs-12 col-md-4">
                    <input type="text" className="name" placeholder="Email" />
                    </div>
                    <div className="col-xs-12 col-md-4">
                    <input type="text" className="name" placeholder="Phone" />
                    </div>
                </div>  
                <div className="row">
                    <div className="col-12">
                        <input type="text" className="msg" placeholder="Meesage" />
                    </div>
                </div>
                <button className="mt-4 mb-5">SEND MESSAGE</button>
            </div>
        </>
    )
}