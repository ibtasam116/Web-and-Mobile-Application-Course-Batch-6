import React from "react";

import './Footer.css'

import footerImg from '../images/NORDIC ROSE.png'

let now = new Date()
let year = now.getFullYear()
document.getElementById("year").innerText = year

export default function Footer() {
    return (
        <footer className="footer">
            <div className="row footerlinks text-center">
                <div className="col-2 fw-bold">Digital product design</div>
                <div className="col">Remote work</div>
                <div className="col fw-bold">UX design</div>
                <div className="col-2">Distributed teams</div>
                <div className="col fw-bold">Creativity</div>
                <div className="col">Strategy</div>
                <div className="col fw-bold">Suspense</div>
                <div className="col">Growth</div>
            </div>
            <div className="row text-center mt-5">
                <div className="col-12 footnordic">
                    <img src={footerImg} alt="" srcset="" />
                </div>
                <div className="col-12 w-75 m-auto">
                    <div className="col-12 w-50 m-auto">
                        <p className="mb-0 nordicpara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
                            tempus erat egestas
                            efficitur.
                            In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. </p>
                    </div>
                </div>
                <div className="col-12 w-75 m-auto mt-4">
                    <div className="col-12 w-50 m-auto footsocial">
                        <a href="">Twitter</a>
                        <a href="" className="px-4">LinkedIn</a>
                        <a href="">RSS</a>
                    </div>
                </div>
                <div className="col-12 w-75 m-auto mt-4">
                    <div className="col-12 w-50 m-auto footyear">
                        <p className="mb-0 mt-4">&copy; 2021-<span id="year"></span>. Nordic Rose Co. <br /> All rights reserved.
                        </p>
                    </div>
                </div>

            </div>

        </footer>
    )
}