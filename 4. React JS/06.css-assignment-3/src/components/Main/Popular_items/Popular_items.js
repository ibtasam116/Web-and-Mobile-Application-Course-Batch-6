import React from "react";

import "./Popular_items.css"

import img1 from '../../../assets/images/Popular Items/Image1.png'
import img2 from '../../../assets/images/Popular Items/Image2.png'
import img3 from '../../../assets/images/Popular Items/Image3.png'
import img4 from '../../../assets/images/Popular Items/Image4.png'
import img5 from '../../../assets/images/Popular Items/Image5.png'

import { MdLocationOn } from "react-icons/md";


function Popular_items() {
    return (
        <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <h3 className="pb-4 fw-bold text-center pt-5">Popular items</h3>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container">
                        <div className="row row-cols-5 g-2">
                            <div className="col">
                                <img src={img1} className="card-img-top menuImages" alt="..." />
                                <h6 className="fw-bold pt-2">Greys Vage</h6>
                                <div className="loc-burger">
                                    {/* <i className="fa-solid fa-location-dot"></i> */}
                                    <MdLocationOn style={{ fontSize: 20, }} />
                                    <span>Burger Arena</span>
                                </div>
                                <span className="fw-bold">$3.88</span>
                                <button className="w-100 mt-2 order-now py-3 fw-bold text-white">Order Now</button>
                            </div>
                            <div className="col">
                                <img src={img2} className="card-img-top menuImages" alt="..." />
                                <h6 className="fw-bold pt-2">Toffe’s Cake</h6>
                                <div className="loc-burger">
                                    <MdLocationOn style={{ fontSize: 20, }} />
                                    <span>Top Sticks</span>
                                </div>
                                <span className="fw-bold">$4.00</span>
                                <button className="w-100 mt-2 order-now py-3 fw-bold text-white">Order Now</button>
                            </div>
                            <div className="col">
                                <img src={img3} className="card-img-top menuImages" alt="..." />
                                <h6 className="fw-bold pt-2">Dancake</h6>
                                <div className="loc-burger">
                                    <MdLocationOn style={{ fontSize: 20, }} />
                                    <span>Dancake</span>
                                </div>
                                <span className="fw-bold">$1.99</span>
                                <button className="w-100 mt-2 order-now py-3 fw-bold text-white">Order Now</button>
                            </div>
                            <div className="col">
                                <img src={img4} className="card-img-top menuImages" alt="..." />
                                <h6 className="fw-bold pt-2">Crispy Sandwitch</h6>
                                <div className="loc-burger">
                                    <MdLocationOn style={{ fontSize: 20, }} />
                                    <span>Fastfood Dine</span>
                                </div>
                                <span className="fw-bold">$3.00</span>
                                <button className="w-100 mt-2 order-now py-3 fw-bold text-white">Order Now</button>
                            </div>
                            <div className="col">
                                <img src={img5} className="card-img-top menuImages" alt="..." />
                                <h6 className="fw-bold pt-2">Thai Soup</h6>
                                <div className="loc-burger">
                                    <MdLocationOn style={{ fontSize: 20, }} />
                                    <span>Foody man</span>
                                </div>
                                <span className="fw-bold">$2.79</span>
                                <button className="w-100 mt-2 order-now py-3 fw-bold text-white">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row row-cols-5 g-2">
                            <div className="col">
                                <img src={img1} className="card-img-top menuImages" alt="..." />
                                <h6 className="fw-bold pt-2">Greys Vage</h6>
                                <div className="loc-burger">
                                    <MdLocationOn style={{ fontSize: 20, }} />
                                    <span>Burger Arena</span>
                                </div>
                                <span className="fw-bold">$3.88</span>
                                <button className="w-100 mt-2 order-now py-3 fw-bold text-white">Order Now</button>
                            </div>
                            <div className="col">
                                <img src={img2} className="card-img-top menuImages" alt="..." />
                                <h6 className="fw-bold pt-2">Toffe’s Cake</h6>
                                <div className="loc-burger">
                                    <MdLocationOn style={{ fontSize: 20, }} />
                                    <span>Top Sticks</span>
                                </div>
                                <span className="fw-bold">$4.00</span>
                                <button className="w-100 mt-2 order-now py-3 fw-bold text-white">Order Now</button>
                            </div>
                            <div className="col">
                                <img src={img3} className="card-img-top menuImages" alt="..." />
                                <h6 className="fw-bold pt-2">Dancake</h6>
                                <div className="loc-burger">
                                    <MdLocationOn style={{ fontSize: 20, }} />
                                    <span>Dancake</span>
                                </div>
                                <span className="fw-bold">$1.99</span>
                                <button className="w-100 mt-2 order-now py-3 fw-bold text-white">Order Now</button>
                            </div>
                            <div className="col">
                                <img src={img4} className="card-img-top menuImages" alt="..." />
                                <h6 className="fw-bold pt-2">Crispy Sandwitch</h6>
                                <div className="loc-burger">
                                    <MdLocationOn style={{ fontSize: 20, }} />
                                    <span>Fastfood Dine</span>
                                </div>
                                <span className="fw-bold">$3.00</span>
                                <button className="w-100 mt-2 order-now py-3 fw-bold text-white">Order Now</button>
                            </div>
                            <div className="col">
                                <img src={img5} className="card-img-top menuImages" alt="..." />
                                <h6 className="fw-bold pt-2">Thai Soup</h6>
                                <div className="loc-burger">
                                <MdLocationOn style={{fontSize: 20,}}/>
                                    <span>Foody man</span>
                                </div>
                                <span className="fw-bold">$2.79</span>
                                <button className="w-100 mt-2 order-now py-3 fw-bold text-white">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>)
}

export default Popular_items;