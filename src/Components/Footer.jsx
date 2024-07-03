import React from "react";

export default function Footer(){
    return(
        <>
            <div className="container-fluid main_footer">
                <div className="row footer">
                    <div className="col-12">
                        <ul>
                            <li>UI DESIGN</li>
                            <li>WINDOWS/MAC OS APPS</li>
                            <li>ANDROID/IOS APPS</li>
                            <li>CLOUD SOLUTIONS</li>
                            <li>CUSTOMER SUPPORT</li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6 text-center">
                        <p>© 2024 RatherApp</p>
                    </div>
                    <div className="col-6 text-center">
                        <p>All rights reserved. Design by TemplateMonster</p>
                    </div>
                </div>
            </div>
        </>
    )
}