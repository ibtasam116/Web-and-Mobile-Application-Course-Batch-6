import React from 'react'
import { ImPhone } from "react-icons/im"
import { FaWhatsapp } from "react-icons/fa"
import { MdLocationPin } from "react-icons/md"


export default function Contact_Us_Cards() {
    return (
        <>
            <div className="col-12 col-md-4 mb-3 mb-md-0">
                <div className="box border p-4 d-flex justify-content-center  align-items-center flex-column">
                    <ImPhone className="mb-3" style={{ fontSize: 50 }} />
                    {/* <i className="fa-solid fa-phone fa-3x mb-3"></i> */}
                    <h4 className="fw-bold">Call</h4>
                    <p><span className="fw-bold me-2">Phone</span><a href="tel:+923178730041" className="text-dark">0317
                        873 00 41</a></p>
                    <p><span className="fw-bold me-2">Landline</span><a href="tel:0418730041" className="text-dark">041
                        873 00 41</a></p>
                </div>
            </div>
            <div className="col-12 col-md-4 mb-3 mb-md-0">
                <div className="box border p-4 d-flex justify-content-center  align-items-center flex-column">
                    <FaWhatsapp className="mb-3" style={{ fontSize: 50, color: "#25d366" }} />
                    {/* <i className="fa-brands fa-whatsapp fa-3x mb-3" style={{ color: "#25d366;" }}></i> */}
                    <h4 className="fw-bold">Whatsapp</h4>
                    <a href="https://wa.me/923178730041" target="-blank" className="text-dark fw-bold">0317
                        873 00 41</a>
                </div>
            </div>
            <div className="col-12 col-md-4 mb-3 mb-md-0">
                <div className="box border p-4 d-flex justify-content-center  align-items-center flex-column">
                    <MdLocationPin className="mb-3" style={{ fontSize: 50 }} />
                    {/* <i className="fa-solid fa-location-dot fa-3x mb-3"></i> */}
                    <h4 className="fw-bold">Address</h4>
                    <p className="text-center"><a href="https://goo.gl/maps/bqjjtyPXsRFQFoxa6" target="-blank"
                        className="text-dark">near
                        Baba Tikka, D Ground Block B People's Colony No 1,</a>
                    </p>
                </div>
            </div>
        </>
    )
}
