import React from 'react'

export default function Proceed_Order_Button() {
    return (
        <div className="proceed-order">
            <div className="container py-5">
                <div className="row text-center text-white">
                    <div className="best-deal">
                        <h5>Are you ready to order with <br /> the best deals?</h5>
                    </div>
                    <div className="text-center mt-3">
                        <button className="buton-proceed py-3 px-1 fw-bold">
                            <span>Proceed to order</span>
                            <i className="fa-solid fa-greater-than"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>)
}
