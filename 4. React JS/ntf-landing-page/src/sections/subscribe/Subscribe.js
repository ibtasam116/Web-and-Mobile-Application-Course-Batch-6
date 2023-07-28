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
                    <div className="col-6">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-6">
                        <h3>Join our weekly digest</h3>
                        <p>Get exclusive promotions & updates straight to your inbox.</p>
                        <div className='subscribe_buttons'>
                            <input type="text" className='' placeholder='Enter your email here' />
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
