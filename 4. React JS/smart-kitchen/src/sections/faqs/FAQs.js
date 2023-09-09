import React from 'react'
import "./FAQs.css"
import Sections_Header from '../../components/sections_header/Sections_Header'
import { Link } from 'react-router-dom'


export default function FAQs() {
    return (
        <>
            <div id="faqs" className="py-5">
                <div className="container ">
                    <Sections_Header
                        color="text-white"
                        heading="FAQs"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sint fugiat quaerat asperiores consectetur officia nemo pariatur, aliquam quos, 
                    voluptatem voluptas cupiditate deleniti qui sunt possimus. Sit quaerat eos aperiam esse?" />

                    <div className="row pt-4">
                        <div className="col">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What kind of food do you serve?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In animi
                                            consequuntur quod tempora rerum fuga dolorum sint officiis repudiandae.
                                            Assumenda perferendis rerum reiciendis rem doloremque aliquam, doloribus
                                            suscipit facere nesciunt.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Can I see a menu?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>Yes Sure!! </strong>Please check out our happy menu. <Link
                                                to="/Menu">Link</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            Can you recommend something for me?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, facilis.
                                            Magni ex perferendis, consequatur adipisci voluptate eligendi asperiores optio
                                            provident labore? Perferendis, in? Ipsa veniam veritatis, magnam minima quidem
                                            accusantium.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false"
                                            aria-controls="collapseFour">
                                            Do you deliver?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>Yes. </strong>please <Link to="/contact">Contact Us.</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
