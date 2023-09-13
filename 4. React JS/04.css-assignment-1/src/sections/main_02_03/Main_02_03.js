import React from "react";

import './Main_02_03.css'

import img3 from '../../assets/images/image3.png'

import rectangle from '../../assets/images/Rectangle8.png'

import imgEyes from '../../assets/images/eyes.png'

import { FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';



export default function Main_02_03() {
    return (
        <>
            <main id="main02">
                <div className="container" id="blog">
                    <div className="row">
                        <div className="col-md-8 col-lg-6 offset-md-2 offset-lg-3 mt-4">
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-12 col-md-4 col-lg-3 offset-md-2 offset-lg-3 d-flex">
                            <div>
                                <img src={img3} className="rounded-circle me-3" alt="" />
                            </div>
                            <div>
                                <span className="profile1Text">Mika MAtikainen</span><br />
                                <span className="profile1Time">Apr 15, 2020 · 4 min read</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 mt-3 mt-md-0 d-flex d-md-inline justify-content-center ">
                            <div className="icon1 float-md-end">
                                <FaTwitter className="mb-1" />
                            </div>
                            <div className="icon1 float-md-end">
                                <FaFacebook className="mb-1" />
                            </div>
                            <div className="icon1 float-md-end d-block d-md-none  ">
                                <FaWhatsapp className="mb-1" />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className=" col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 para">
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus
                                erat egestas
                                efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.
                                Aenean pharetra quis lacus at viverra.
                            </p>
                            <p className="mb-5">
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.
                            </p>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
                            <h4 className="nexton">Next on the pipeline</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 para">
                            <p className="mb-4">
                                Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc
                                eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti
                                sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </p>
                            <p className="mb-4">
                                Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et
                                fringilla.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2">
                        <img className="w-100" src={rectangle} alt="Rectangle8" />
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 offset-md-3 offset-lg-4 text-center" id="about">
                    <p className="caption1">Image caption centered this way and I'll make this a bit longer to indicate the
                        amount of line-height. </p>
                </div>
            </div>

            <main id="main-03">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-12 col-md-8 col-lg-6 col offset-md-2 offset-lg-3 para">
                            <p className="mb-4">Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora
                                torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
                            </p>
                            <p className="mb-5">
                                In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl
                                et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem
                                pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.
                            </p>
                        </div>
                        <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
                            <h6 className="listheading">A list looks like this:</h6>
                            <ul className="main-03-list">
                                <li>First item in the list</li>
                                <li className="my-3">Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum
                                    sit amet
                                </li>
                                <li>Third item in the list</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 para">
                            <p className="mb-4">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                himenaeos. Aliquam quis posuere ligula.
                            </p>
                            <p className="my-4">Thanks for reading,<br />
                                Mika
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 text-center d-flex">
                            <div className="sharelink py-2">
                                <FaFacebook className="mb-1" />
                                <span className="d-none d-md-inline">Share on Facebook</span>
                            </div>
                            <div className="sharelink py-2">
                                <FaTwitter className="mb-1" />
                                <span className="d-none d-md-inline">Share on Twitter</span>
                            </div>
                            <div className="sharelink py-2 d-inline d-md-none">
                                <FaWhatsapp className="mb-1" />
                            </div>
                        </div>

                    </div>

                    <div className="row my-4 tags">
                        <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
                            <p className="mb-0">
                                Tags:
                                <span className="text-decoration-underline">product design</span>,
                                <span className="text-decoration-underline">culture</span>
                            </p>
                            <div className="line1 my-4"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 d-flex align-items-center">
                            <div>
                                <img src={img3} className="rounded-circle me-3" alt="" />
                            </div>
                            <div className="profile-2-description">
                                <span className="profile-2-span">Mika Matikainen</span>
                                is a Design Founder & Advisor, Berlin School of Creative Leadership
                                Executive MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="container-fluid">
                <div className="row eyesimage text-center my-5">
                    <div className="col-12">
                        <img src={imgEyes} alt="eyes" /><br />
                    </div>
                    <div className="line"></div>
                </div>
            </div>
        </>




    )
}