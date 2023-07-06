import React from "react";

import './Fresh_Fruits.css'

import imgFruits1 from '../../images/orange.png'
import imgFruits2 from '../../images/grapes.png'
import imgFruits3 from '../../images/gauva.png'

export default function Fresh_Fruits() {
    return (
        <div className="fresh-fruits">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <h1 className="fw-bold">Fresh Fruits</h1>
                        <p className="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <h3>Best Fresh Orange</h3>
                        <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, quidem quis non excepturi
                            tenetur, similique
                            esse eligendi corrupti dicta deleniti eveniet architecto rem pariatur. Temporibus eveniet porro dolores
                            perspiciatis odio.</p>
                        <button className="px-4 bg-black border-black text-white py-1">Buy Now</button>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 pt-5">
                        <div className="col-6 text-center"><img src={imgFruits1} className="fresh" alt="" /></div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <h3>Best Fresh Grapes</h3>
                        <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, quidem quis non excepturi
                            tenetur, similique
                            esse eligendi corrupti dicta deleniti eveniet architecto rem pariatur. Temporibus eveniet porro dolores
                            perspiciatis odio.</p>
                        <button className="px-4 bg-black border-black text-white py-1">Buy Now</button>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 pt-5">
                        <div className="col-6 text-center"><img src={imgFruits2} className="grapes" alt="" /></div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <h3>Best Fresh Gauva</h3>
                        <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, quidem quis non excepturi
                            tenetur, similique
                            esse eligendi corrupti dicta deleniti eveniet architecto rem pariatur. Temporibus eveniet porro dolores
                            perspiciatis odio.</p>
                        <button className="px-4 bg-black border-black text-white py-1">Buy Now</button>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 pt-5">
                        <div className="col-6 text-center"><img src={imgFruits3} className="fresh" alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}