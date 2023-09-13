import React from "react";

import './Footer.css'

export default function Footer() {

    let now = new Date();
    let year = now.getFullYear();

    return (

        <>
            <footer className="footer mt-5" id="links">
                <div className="container-fluid">
                    <div className="row">
                        <ul className="footerlinks text-center">
                            <li className="fw-bold d-none d-sm-block d-lg-block">Digital product design</li>
                            <li className="d-none d-md-none d-lg-block">Remote work</li>
                            <li className="fw-bold">UX design</li>
                            <li className="d-none d-sm-none d-md-block">Distributed teams</li>
                            <li className="fw-bold">Creativity</li>
                            <li className="d-none d-sm-none d-md-block">Strategy</li>
                            <li className="fw-bold d-none d-md-none d-lg-block">Suspense</li>
                            <li className="d-none d-sm-block d-lg-block">Growth</li>
                        </ul>
                    </div>
                    <div className="row text-center mt-5">
                        <div className="col-12 col-md-8 col-lg-4 offset-md-2 offset-lg-4">
                            <div className="footer-title">nordic rose</div>
                            <p className="nordicPara my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
                                velit
                                tempus erat egestas
                                efficitur.
                                In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. </p>
                            <div className="footerSocialIcons">
                                <a href="">Twitter</a>
                                <a href="" className="px-4">LinkedIn</a>
                                <a href="">RSS</a>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <p className="mb-2">&copy; 2021-<span>{year}</span>. Nordic Rose Co. <br /> All rights
                                reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}