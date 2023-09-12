import React from 'react'
import { ImPhone } from "react-icons/im"
import { FaWhatsapp } from "react-icons/fa"
import { MdLocationPin } from "react-icons/md"


export default function Contact_Us_Cards() {
    return (
        <>
            <section className='py-9 md:py-24'>

                <div className="container mx-auto px-[5%] md:px-[10%]">

                    <div className='grid md:grid-cols-3 gap-6'>

                        <div className="mb-3 md:mb-0">
                            <div className="box border border-[#6AB0FF] hover:border-[#E5F3FE] hover:bg-[#E5F3FE] transition-all rounded-2xl py-20 flex justify-center  items-center flex-col">
                                <ImPhone className="mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-700" style={{ fontSize: 50 }} />
                                {/* <i className="fa-solid fa-phone fa-3x mb-3"></i> */}
                                <h4 className="font-bold">Call</h4>
                                <p><span className="font-bold me-2">Phone</span><a href="tel:+923429717211" className="text-dark">0342
                                    971 72 11</a></p>
                                <p><span className="font-bold me-2">Landline</span><a href="tel:0418789440" className="text-dark">041
                                    878 94 40</a></p>
                            </div>
                        </div>

                        <div className="mb-3 md:mb-0">
                            <div className="box border border-[#6AB0FF] hover:border-[#E5F3FE] hover:bg-[#E5F3FE] transition-all rounded-2xl  py-[92px] flex justify-center  items-center flex-col">
                                <FaWhatsapp className="mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-700" style={{ fontSize: 50, color: "#25d366" }} />
                                {/* <i className="fa-brands fa-whatsapp fa-3x mb-3" style={{ color: "#25d366;" }}></i> */}
                                <h4 className="font-bold">Whatsapp</h4>
                                <a href="https://wa.me/923046547211" target="-blank" className="text-dark fw-bold">0304
                                    654 72 11</a>
                            </div>
                        </div>

                        <div className="mb-3 md:mb-0">
                            <div className="box border border-[#6AB0FF] hover:border-[#E5F3FE] hover:bg-[#E5F3FE] transition-all rounded-2xl py-20 flex justify-center  items-center flex-col">
                                <MdLocationPin className="mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-700" style={{ fontSize: 50 }} />
                                {/* <i className="fa-solid fa-location-dot fa-3x mb-3"></i> */}
                                <h4 className="font-bold">Address</h4>
                                <p className="text-center"><a href="https://g.co/kgs/VWoJM9" target="-blank"
                                    className="text-black">
                                    Future Plus Digital Agency D Ground Block B People's Colony No. 1</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
