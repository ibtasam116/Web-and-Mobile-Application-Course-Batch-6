import React from 'react'
import "./Subscribe.css"

import img from "../../assets/images/subscribe/Photo.png"
import Subscribe_Card from '../../components/subscribe_card/Subscribe_Card'

export default function Subscribe() {
    return (
        <div className="subscribe">
            <div className="container text-white p-5">
                <div className="row p-5 row-color">
                    <div className="col-sm-12 col-md-12 col-lg-6 text-center">
                        <img src={img} alt="" className='img-fluid subs-image' />
                    </div>
                    <Subscribe_Card />
                </div>
            </div>
        </div>
    )
}
