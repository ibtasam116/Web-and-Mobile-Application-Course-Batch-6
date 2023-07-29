import React from 'react'
import "./Subscribe.css"

import Button from '../../components/button/Button'
import { PiEnvelopeSimpleLight } from 'react-icons/pi'

import img from "../../assets/images/subscribe/Photo.png"

export default function Subscribe() {
    return (
        <div className="subscribe">
            <div className="container text-white p-5">
                <div className="row p-5 row-color">
                    <div className="col-sm-12 col-md-12 col-lg-6 text-center">
                        <img src={img} alt="" className='img-fluid subs-image' />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 px-0 px-md-5 px-lg-0">
                        <h3 className='subs-heading'>Join our weekly digest</h3>
                        <p className='subs-para'>Get exclusive promotions & updates straight to your inbox.</p>
                        <div className='subscribe_buttons text-center'>
                            <input type="text" placeholder='Enter your email here' />
                            <Button
                                btnTitle="Subscribe"
                                size="btn-padding-lg"
                                hover="btn-hover"
                                icon={PiEnvelopeSimpleLight}
                                marginEnd="icon-mar-sm" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
