import React from 'react';

import './Header_Main.css'

function Header_Main() {
    return (
        <header id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h1 className="starving text-white fw-bold">Are you starving?</h1>
                        <h6 className="fewClicks py-3">Within a few clicks, find meals that are accessible near you</h6>
                        <div className="white1 px-4">
                            <span className="delivery py-2 px-3">
                                <i className="fa-solid fa-motorcycle pe-1"></i>
                                <span>Delivery</span>
                            </span>
                            <span className="pickup py-2 px-4 ms-1">
                                <i className="fa-solid fa-bag-shopping pe-1"></i>
                                <span>Pickup</span>
                            </span>
                        </div>
                        <div className="white2 px-4">
                            <span className="typeAddress">
                                <i className="fa-solid fa-location-dot"></i>
                                <input className="yourAddress" type="text" name="" id="" placeholder="Enter Your Address" />
                            </span>
                            {/* <Button className="find text-white"><i className="fa-solid fa-magnifying-glass"></i>
                                Find Food</Button> */}
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <div>
                            <img src="./images/Image Base.png" className="imageBase img-fluid" alt="Image Base" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header_Main;