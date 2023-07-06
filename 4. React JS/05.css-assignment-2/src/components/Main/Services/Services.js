import React from "react";

import './Services.css'

import imgService1 from '../../images/card-item-1.png'
import imgService2 from '../../images/card-item-2.png'
import imgService3 from '../../images/card-item-3.png'

export default function Services() {
    return (
        <div className="services">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <h1 className="fw-bold">Our Services</h1>
                        <p className="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 text-center my-3">
                    <div className="col">
                        <div className="card">
                            <img src={imgService1} className="card-img-top py-5 card-items" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-danger fw-bold">Card title</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iusto, illum
                                        praesentium neque, sunt deleniti delectus perspiciatis laborum corrupti non dolor similique mollitia
                                        sequi, libero expedita ratione omnis cupiditate amet!</p>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={imgService2} className="card-img-top py-5 card-items" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-danger fw-bold">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iusto, illum
                                    praesentium neque, sunt deleniti delectus perspiciatis laborum corrupti non dolor similique mollitia
                                    sequi, libero expedita ratione omnis cupiditate amet!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={imgService3} className="card-img-top py-5 card-items" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-danger fw-bold">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iusto, illum
                                    praesentium neque, sunt deleniti delectus perspiciatis laborum corrupti non dolor similique mollitia
                                    sequi, libero expedita ratione omnis cupiditate amet!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 offset-4 text-center">
                        <button className="px-4 bg-black border-black text-white py-1 my-3 read-more">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}