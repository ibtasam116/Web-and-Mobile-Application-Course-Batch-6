import React from "react";
import "./Navbar.css";

import { MdOutlineMenu } from "react-icons/md"

export default function Navbar() {
    return (
        <>
            <header className="sticky-top">
                <div className="container-fluid">
                    <div className="row nav">
                        <div className="col-sm-6 col-lg-6">
                            <span className="nordic fw-bold ms-lg-5 ps-lg-5">nordic rose</span>
                            <MdOutlineMenu className="menu-icon"/>
                        </div>
                        <div className="col-sm-6 col-lg-6 nav-lis">
                            <ul>
                                <li>blog</li>
                                <li>about</li>
                                <li>links</li>
                                <li>projects</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}