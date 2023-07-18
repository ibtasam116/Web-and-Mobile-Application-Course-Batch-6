import React from "react";

import "./Deals.css"

import img1 from "../../../assets/images/Deals/Image1.png"
import img2 from "../../../assets/images/Deals/Image2.png"
import img3 from "../../../assets/images/Deals/Image3.png"

import { FaGreaterThan } from "react-icons/fa"

function Deals() {
    return (
        <div className="deals py-5">
            <div className="container">
                <div className="deal-shadow my-5">
                    <div className="row">
                        <div className="col-12 col-md-4 ps-4">
                            <div className="mx-5 mt-5">
                                <p className="mb-0 pt-5 fw-bold best-deal best-deal-color">Best deals <span
                                    className="best-deal-color1">Crispy Sandwiches</span></p>
                                <p className="mb-0 complete pt-3">Enjoy the large size of sandwiches. Complete
                                    perfect slice of sandwiches.</p>
                            </div>
                            <div className="text-center mt-5">
                                <button className="buton-proceed-order py-3 px-1 fw-bold">
                                    <span>Proceed to order</span>
                                    <FaGreaterThan />
                                </button>
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <img src={img1} className="deal1-img" alt="" />
                        </div>
                    </div>
                </div>
                <div className="deal-shadow my-5">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <img src={img2} className="deal2-img" alt="" />
                        </div>
                        <div className="col-12 col-md-4 ps-2">
                            <div className="mx-5 mt-5">
                                <p className="mb-0 pt-5 fw-bold best-deal best-deal-color">Celebrate parties
                                    with <span className="best-deal-color1">Fried Chicken</span></p>
                                <p className="mb-0 complete pt-3">Get the best fried chicken smeared with a lip smacking
                                    lemon
                                    chili flavor. Check out
                                    best deals for fried chicken.</p>
                            </div>
                            <div className="text-center mt-4">
                                <button className="buton-proceed-order py-3 px-1 fw-bold">
                                    <span>Proceed to order</span>
                                    <FaGreaterThan />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="deal-shadow my-5">
                    <div className="row">
                        <div className="col-12 col-md-4 ps-4">
                            <div className="mx-5 mt-5">
                                <p className="mb-0 pt-5 fw-bold best-deal best-deal-color">Wanna eat hot
                                    & spicy <span className="best-deal-color1">Pizza?</span></p>
                                <p className="mb-0 complete pt-3">Pair up with a friend and enjoy the
                                    hot and crispy pizza pops. Try it
                                    with the best deals.</p>
                            </div>
                            <div className="text-center mt-5">
                                <button className="buton-proceed-order py-3 px-1 fw-bold">
                                    <span>Proceed to order</span>
                                    <FaGreaterThan />
                                </button>
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <img src={img3} className="deal1-img" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deals;