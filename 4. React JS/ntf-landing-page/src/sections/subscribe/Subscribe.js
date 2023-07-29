import React from 'react'
import "./Subscribe.css"

import Button from '../../components/button/Button'
import { AiOutlineUser } from 'react-icons/ai'

import img from "../../assets/images/subscribe/Photo.png"

export default function Subscribe() {
    return (
        <div className="subscribe">
            <div className="container text-white p-5">
                <div className="row p-5 row-color">
                    <div className="col-sm-12 col-md-12 col-lg-6 text-center">
                        <img src={img} alt="" className='img-fluid' />
                    </div>
                    <div className="col-6 px-5">
                        <h3 className='main-heading'>Join our weekly digest</h3>
                        <p>Get exclusive promotions & updates straight to your inbox.</p>
                        <div className='subscribe_buttons'>
                            <input type="text" className='new-input' placeholder='Enter your email here' />
                            <Button
                                btnTitle="Sign Up"
                                size="btn-padding-lg"
                                hover="btn-hover"
                                icon={AiOutlineUser}
                                marginEnd="icon-mar-sm" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
