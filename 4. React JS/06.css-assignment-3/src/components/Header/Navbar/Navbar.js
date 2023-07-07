import React from "react";

import "./Navbar.css"

function Navbar() {
    return (
        <div id="top">
            <div className="container">
                <div className="row py-3">
                    <div className="col-sm-12 col-md-3 text-center">
                        <div className="foodwagon fw-bold">
                            <i className="fa-solid fa-burger logo"></i>
                            <span className="food">food</span><span className="wagon">waGon</span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mt-md-2 reso text-center pt-">
                        <div className="location text-wrap">
                            <span className="fw-bold">Deliver to: </span>&nbsp;
                            <i className="fa-solid fa-location-dot"></i>
                            <span> Current Location</span>
                            <span className="fw-bold">Mohammadpur Bus Stand, Dhaka</span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 text-center">
                        <div className="search fw-bold">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <span>Search Food</span>
                            <button className="login py-2 px-3 ms-3 mt-md-1">
                                <i className="fa-solid fa-user"></i>
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