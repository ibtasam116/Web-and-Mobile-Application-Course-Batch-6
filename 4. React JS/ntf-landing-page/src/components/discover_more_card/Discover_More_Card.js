import React from 'react'

import img1 from "../../assets/images/discover_more/Image Placeholder1.png"
import Avatar_Placeholder1 from '../../assets/images/discover_more/Avatar Placeholder1.png'


export default function Discover_More_Card() {
    return (
        <>
            <div className="col-4 p-4 text-white">
                <div className='hero_right_side'>
                    <img src={img1} alt="" className='hero_img w-100 img-fluid' />
                    <div className='py-2 px-4'>
                        <h5>Space Walking</h5>
                        <div className='d-flex align-items-center'>
                            <img src={Avatar_Placeholder1} alt="" className='img-fluid' />
                            <h6 className='ms-3 my-1'>Dish Studio</h6>
                        </div>
                        <div className='discover_price my-3'>
                            <div>
                                <h6 className='price'>Price</h6>
                                <h5>1.63 ETH</h5>
                            </div>
                            <div>
                                <h6 className='price'>Highest Bid</h6>
                                <h5>0.33 wETH</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
