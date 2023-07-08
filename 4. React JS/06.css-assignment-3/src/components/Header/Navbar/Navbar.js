import React from "react";

import "./Navbar.css";

import {MdLocationOn} from "react-icons/md";
import {FaHamburger} from "react-icons/fa";
import {BiSearchAlt2, BiSolidUser} from "react-icons/bi";

function Navbar() {
    return (
        <div id="top">
            <div className="container">
                <div className="row py-3">
                    <div className="col-sm-12 col-md-3 text-center">
                        <div className="foodwagon fw-bold">
                            <i className="logo me-2"><FaHamburger /></i>
                            <span className="food">food</span><span className="wagon">waGon</span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mt-md-2 reso text-center pt-">
                        <div className="location text-wrap">
                            <span className="fw-bold">Deliver to: </span>&nbsp;
                            <i className="h5"><MdLocationOn /></i>
                            <span> Current Location</span>
                            <span className="fw-bold">Mohammadpur Bus Stand, Dhaka</span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 text-center">
                        <div className="search fw-bold">
                            <i className=" me-1 fw-bold h5"><BiSearchAlt2 /></i>
                            <span>Search Food</span>
                            <button className="login py-2 px-3 ms-3 mt-md-1">
                                <i className="h5"><BiSolidUser /></i>
                                <span className="fw-bold ms-2">Login</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;