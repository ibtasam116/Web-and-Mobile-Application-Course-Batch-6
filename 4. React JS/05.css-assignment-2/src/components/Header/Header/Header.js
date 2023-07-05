import React from "react";

import './Header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="container pb-4">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-sm-12 mt-5 welcome text-lg-start text-center">
                        <h1>Welcome to our Fruits Shop</h1>
                        <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, quidem quis non excepturi tenetur, similique
                            esse eligendi corrupti dicta deleniti eveniet architecto rem pariatur. Temporibus eveniet porro dolores
                            perspiciatis odio.</p>
                        <button className="px-4 bg-danger border-danger text-white py-1">SHOPE NOW</button>
                        <button className="px-4 bg-black border-black text-white py-1">CONTACT US</button>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-sm-12  mt-5 text-center">
                        <img src="./assests/images/slide-img.png" className="slide-img img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}