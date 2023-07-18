import React from "react";

import "../Footer.css"
import Footer_Main_Card from "./Footer_Main_Card";

import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { HiMail } from "react-icons/hi"

function Footer_Main() {
    return (
        <>
            <div className="row pt-5 pb-5">
                <Footer_Main_Card Company="Company" Item1="San Francisco" Item2="Miami" Item3="San Diego" Item4="East Bay" />
                <Footer_Main_Card Company="Company" Item1="San Francisco" Item2="Miami" Item3="San Diego" />
                <Footer_Main_Card Company="Company" Item1="San Francisco" Item2="Miami" Item3="San Diego" Item4="East Bay" />
                <div className="col-5 offset-1 cities">
                    <ul>
                        <p className="mb-4 follow">Follow Us</p>
                        <li className="foot_icon mb-4">
                            <AiOutlineInstagram className="h4" />
                            <BsFacebook className="mx-3 h4" />
                            <AiOutlineTwitter className="h4" />
                        </li>
                        <li>
                            <p className="mb-4">Receive exclusive offers in your mailbox</p>
                        </li>
                        <li>
                            <span className="type-email">
                                <HiMail className="h4"/>
                                <i className="fa-solid fa-envelope"></i>
                                <input className="your-email" type="text" name="" id="" placeholder="Enter Your email" />
                            </span>
                            <button className="subscribe text-white">Subscribe</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row-border"></div>
        </>
    )
}

export default Footer_Main;