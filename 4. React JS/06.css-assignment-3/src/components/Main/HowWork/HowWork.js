import React from "react";

import "./HowWork.css"

import {MdLocationOn} from "react-icons/md";

import {FaConciergeBell} from "react-icons/fa";

import {FaReceipt} from "react-icons/fa";

import {BsEmojiSmileFill} from "react-icons/bs";

function HowWork() {
    return (
        <div className="work">
            <div className="container text-center py-5">
                <h3 className="doesWork pb-4">How does it work</h3>
                <div className="row row-cols-1 row-cols-md-4 g-2">
                    <div className="col">
                        {/* <i className="fa-solid fa-location-dot workIcon"></i> */}
                        <MdLocationOn className="workIcon"/>
                        <h6 className="pt-3 fw-bold">Select location</h6>
                        <p className="px-4 py-1 mb-0 iconDetail">Choose the location where your food will be delivered.</p>
                    </div>
                    <div className="col">
                        {/* <i className="fa-solid fa-bell-concierge workIcon"></i> */}
                        <FaConciergeBell className="workIcon"/>
                        <h6 className="pt-3 fw-bold">Choose order</h6>
                        <p className="px-4 py-1 mb-0 iconDetail">Check over hundreds of menus to pick your favorite food</p>
                    </div>
                    <div className="col">
                        {/* <i className="fa-solid fa-receipt workIcon"></i> */}
                        <FaReceipt className="workIcon"/>
                        <h6 className="pt-3 fw-bold">Pay advanced</h6>
                        <p className="px-4 py-1 mb-0 iconDetail">It's quick, safe, and simple. Select several methods of payment
                        </p>
                    </div>
                    <div className="col">
                        {/* <i className="fa-solid fa-face-smile workIcon"></i> */}
                        <BsEmojiSmileFill className="workIcon"/>
                        <h6 className="pt-3 fw-bold">Enjoy meals</h6>
                        <p className="px-4 py-1 mb-0 iconDetail">Food is made and delivered directly to your home.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWork;