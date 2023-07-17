import React from "react";

import "./Header_Menus.css"


import img1 from "../../../assets/images/Image1.png"
import img2 from "../../../assets/images/Image2.png"
import img3 from "../../../assets/images/Image3.png"
import img4 from "../../../assets/images/Image4.png"

function Header_Menus() {
    return (

        <div className="container py-5">
            <div className="row row-cols-1 row-cols-md-4 g-2">
                <div className="col">
                    <span className="off-to">
                    </span>
                    <img src={img1} className="card-img-top menuImages" alt="..." />
                    <h6 className="pt-3 pb-1 fw-bold">Greys Vage</h6>
                    <span className="menuTime px-2 py-1">6 Days Remaining</span>
                </div>
                <div className="col">
                    <img src={img2} className="card-img-top menuImages" alt="..." />
                    <h6 className="pt-3 pb-1 fw-bold">Greys Vage</h6>
                    <span className="menuTime px-2 py-1">6 Days Remaining</span>
                </div>
                <div className="col">
                    <img src={img3} className="card-img-top menuImages" alt="..." />
                    <h6 className="pt-3 pb-1 fw-bold">Greys Vage</h6>
                    <span className="menuTime px-2 py-1">7 Days Remaining</span>
                </div>
                <div className="col">
                    <img src={img4} className="card-img-top menuImages" alt="..." />
                    <h6 className="pt-3 pb-1 fw-bold">Greys Vage</h6>
                    <span className="menuTime px-2 py-1">8 Days Remaining</span>
                </div>
            </div>
        </div>

    )
}

export default Header_Menus;