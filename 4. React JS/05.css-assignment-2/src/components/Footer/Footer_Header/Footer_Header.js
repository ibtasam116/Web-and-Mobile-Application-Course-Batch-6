import React from "react";

import './Footer.css'

import imgFb from '../../images/fb.png'
import imgTw from '../../images/twitter.png'
import imglin from '../../images/linkedin.png'
import imgInsta from '../../images/instagram.png'

export default function Footer_Header() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-12 col-md-6">
                    <h4>Fruits</h4>
                    <p className="mb-0 w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quisquam ab temporibus
                        harum quis libero
                        sunt error officia.</p>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6">
                    <h4>Services</h4>
                    <p className="mb-0 w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quisquam ab temporibus
                        harum quis libero
                        sunt error officia.</p>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6">
                    <h4>List</h4>
                    <p className="mb-0 w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quisquam ab temporibus
                        harum quis libero
                        sunt error officia.</p>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6">
                    <h4 className="mb-3">Follow Us</h4>
                    <img src={imgFb} className="social-links img-fluid" alt="" />
                    <img src={imgTw} className="social-links img-fluid ms-1" alt="" />
                    <img src={imglin} className="social-links img-fluid ms-1" alt="" />
                    <img src={imgInsta} className="social-links img-fluid ms-1" alt="" />
                    <h5 className="mt-4">Subscribe Now</h5>
                    <input type="text" /><br />
                    <button className="px-4 bg-danger border-danger text-white py-1 mt-4">Subscribe</button>
                </div>
            </div>
        </div>
    )
}
