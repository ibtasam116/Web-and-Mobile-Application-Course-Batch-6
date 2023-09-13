import React from 'react'

import './Cards.css'

import imgCard1 from '../../assets/images/Rectangle4.png'
import imgCard2 from '../../assets/images/Rectangle11.png'
import imgCard3 from '../../assets/images/Rectangle10.png'
import imgCard4 from '../../assets/images/Rectangle37.png'
import imgCard5 from '../../assets/images/Rectangle39.png'
import imgCard6 from '../../assets/images/Rectangle38.png'

export default function Cards() {
    return (
        <>
            <main id="projects">
                <div className="container">
                    <div className="row my-3">
                        <div className="col-12 text-center">
                            <h1 className="what">What to read next</h1>
                        </div>
                    </div>

                    <div className="row text-center">
                        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div className="card">
                                <img src={imgCard1} className="img-fluid" alt="Rectangle4" />
                            </div>
                            <div className="caption-down px-3 px-sm-0 px-lg-5">
                                <p>Connecting artificial intelligence with digital product design</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div className="card">
                                <img src={imgCard2} className="img-fluid" alt="Rectangle11" />
                            </div>
                            <div className="caption-down px-0 px-lg-5">
                                <p>Hello world, or, in other words, why this blog exists</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0 d-block d-sm-none d-md-block">
                            <div className="card">
                                <img src={imgCard3} className="img-fluid" alt="Rectangle10" />
                            </div>
                            <div className="caption-down px-0 px-lg-5">
                                <p>Here are some things you should know regarding how we work</p>
                            </div>
                        </div>
                    </div>

                    <div className="row text-center">
                        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div className="card">
                                <img src={imgCard4} className="img-fluid" alt="Rectangle37" />
                            </div>
                            <div className="caption-down px-3 px-sm-0 px-lg-5">
                                <p>Connecting artificial intelligence with digital product design</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div className="card">
                                <img src={imgCard5} className="img-fluid" alt="Rectangle39" />
                            </div>
                            <div className="caption-down px-0 px-lg-5">
                                <p>Hello world, or, in other words, why this blog exists</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0 d-block d-sm-none d-md-block">
                            <div className="card">
                                <img src={imgCard6} className="img-fluid" alt="Rectangle38" />
                            </div>
                            <div className="caption-down px-0 px-lg-5">
                                <p>Here are some things you should know regarding how we work</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <main>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-12 col-md-8 offset-md-2 text-center my-5">
                            <div className=" card-border">
                                <div className="card-title mt-5">
                                    <h1>Sign up for the newsletter</h1>
                                </div>
                                <div className="card-description mt-3 mb-4">
                                    <p className="mb-0">If you want relevant updates occasionally, sign up for the private
                                        newsletter.
                                        Your email is
                                        never shared. </p>
                                </div>
                                <div className="mb-5 card-input d-flex justify-content-center">
                                    <input type="text" placeholder="Enter your email..." />
                                    <button>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
