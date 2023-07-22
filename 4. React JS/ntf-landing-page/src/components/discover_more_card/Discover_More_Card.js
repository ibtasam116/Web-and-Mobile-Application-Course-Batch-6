import React from 'react'

export default function Discover_More_Card(props) {
    return (
        <>
            <div className="col-4 p-4 text-white">
                <div className='hero_right_side'>
                    <img src={props.imgSrc} alt="" className='hero_img w-100 img-fluid' />
                    <div className='py-2 px-4'>
                        <h5>{props.heading}</h5>
                        <div className='d-flex align-items-center'>
                            <img src={props.imgSmall} alt="" className='img-fluid' />
                            <h6 className='ms-3 my-1'>{props.subheading}</h6>
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
