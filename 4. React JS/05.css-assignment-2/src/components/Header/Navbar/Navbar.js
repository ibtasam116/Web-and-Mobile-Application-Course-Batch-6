import React from "react";

import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <img src="./assests/images/logo.png" alt="" />
                    <a className="navbar-brand ms-2 fw-bold" href="#">TROPIKO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <form className="d-flex" role="search">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active me-4" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active me-4" href="#">Fruits</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active me-4" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active me-4" href="#">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <i className="fa-solid fa-magnifying-glass nav-link mt-1 me-4"></i>
                                </li>
                            </ul>
                            <button className="px-2 bg-danger border-danger text-white py-1">SHOPE NOW</button>
                        </form>
                    </div>
            </div>
        </nav>
    )
}