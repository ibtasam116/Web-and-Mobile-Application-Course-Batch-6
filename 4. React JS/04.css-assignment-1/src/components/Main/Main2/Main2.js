import React from "react";

import './Main2.css'

import img3 from '../../images/image3.png'

import rectangle from '../../images/Rectangle8.png'

export default function Main2() {
    return (

        <main>
            <div className="w-50 m-auto mt-4">
                <div className="w-75 m-auto">
                    <div className="line"></div>
                    <div className="profile1 my-3">
                        <div className="row">
                            <div className="col-1 me-3">
                                <img src={img3} className="image3" alt="" srcset="" />
                            </div>
                            <div className="col ps-4">
                                <span className="profile1Text">Mika MAtikainen</span><br />
                                    <span className="profile1Time">Apr 15, 2020 · 4 min read</span>
                            </div>
                            <div className="col py-2">
                                <span className="icon1 float-end">
                                    <i className="fa-brands fa-twitter"></i>
                                </span>
                                <span className="icon1 float-end">
                                    <i className="fa-brands fa-facebook"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col para1">
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
                        <div className="col">
                            <h4 className="nexton">Next on the pipeline</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col para2">
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
            </div>

            {/* Rectangle8 image */}
            <div className="container-fluid">
                <div className="row w-50 m-auto">
                    <div className="col"><img className="image2" src={rectangle} alt="Rectangle8" /></div>
                </div>
                <div className="row w-50 m-auto">
                    <div className="col">
                        <p className="caption1">Image caption centered this way and I'll make this a bit longer to indicate the
                            amount of line-height. </p>
                    </div>
                </div>
            </div>


            <div className="w-50 m-auto mt-4">
                <div className="w-75 m-auto">
                    <div className="row mt-4">
                        <div className="col para3">
                            <p className="mb-4">Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora
                                torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
                            </p>
                            <p className="mb-5">
                                In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl
                                et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem
                                pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h6 className="listheading">A list looks like this:</h6>
                        </div>
                    </div>
                    <div className="row pointList">
                        <div className="col">
                            <ul>
                                <li>
                                    First item in the list
                                </li>
                                <li>
                                    Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet
                                </li>
                                <li>
                                    Third item in the list
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col para3">
                            <p className="mb-4">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                himenaeos. Aliquam quis posuere ligula.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col para3">
                            <p className="mb-4">Thanks for reading,<br />
                                Mika
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col text-center sharelink py-2">
                            <i className="fa-brands fa-facebook"></i>
                            <span>Share on Facebook</span>
                        </div>
                        <div className="col text-center sharelink py-2">
                            <i className="fa-brands fa-twitter"></i>
                            <span>Share on Twitter</span>
                        </div>
                    </div>

                    <div className="row my-4 tags">
                        <div className="col">
                            <p className="mb-0">Tags: product design, culture</p>
                        </div>
                    </div>

                    <div className="line1"></div>

                    <div className="profile2 my-4">
                        <div className="row">
                            <div className="col-1 me-3">
                                <img src={img3} className="image3" alt="" srcset="" />
                            </div>
                            <div className="col ps-4">
                                <span className="profile2span1">
                                    Mika Matikainen
                                </span>
                                <span className="profile2span2">
                                    is a Design Founder & Advisor, Berlin School of Creative Leadership
                                    Executive MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.
                                </span>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>

    )
}