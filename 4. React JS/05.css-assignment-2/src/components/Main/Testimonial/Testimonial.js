import React from "react";

import imgTestimonial from '../../images/client.png'

export default function Testimonial() {
    return (
        <div className="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 text-center">
                        <h1 className="fw-bold">Testimonial</h1>
                        <p className="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <img src={imgTestimonial} className="clien pt-5 img-fluid" alt="" />
                            <h4>Johnhex</h4>
                            <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam debitis amet consectetur.
                                Porro illo
                                molestiae fugit aliquam cumque quod, quam dolore dicta ullam minus odit distinctio aperiam quis, iste
                                necessitatibus.</p>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}