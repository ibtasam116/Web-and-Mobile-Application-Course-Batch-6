import React from 'react'

import './Browse_Categories.css'
import Section_Top from '../../components/section_tops/Section_Tops'

export default function Browse_Categories() {
    return (
        <>
            <div className="browse">
                <div className="container py-3">
                    <div className="row py-3 text-white">
                        <Section_Top heading="Browse Categories" subheading="" />
                    </div>
                    <div className="row">
                        <div className="col-4 p-4 text-white">
                            <div className='hero_right_side'>
                                {/* <img src={img1} alt="" className='hero_img w-100 img-fluid' /> */}
                                <div className='py-2 px-4'>
                                    <h5>Space Walking</h5>
                                    <div className='d-flex align-items-center'>
                                        {/* <img src={Avatar_Placeholder1} alt="" className='img-fluid' /> */}
                                        <h6 className='ms-3 my-1'>Dish Studio</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
