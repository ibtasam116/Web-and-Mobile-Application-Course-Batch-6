import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <header className="sticky-top">
            <div className="container-fluid">
                <div className="row first-bar">
                    <div className="col">
                        <span className="nordic">nordic rose</span>
                    </div>
                    <div className="col">
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
    )
}