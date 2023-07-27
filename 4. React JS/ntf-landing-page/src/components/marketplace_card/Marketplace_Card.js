import React from 'react'
import "./Marketplace_Card.css"


export default function Marketplace_Card(props) {
    return (
        <>
            <div className={`col-md-6 col-sm-12 ${props.sizeForDis} ${props.display} p-4`}>
                <div className='hero_right_side'>
                    <img src={props.hero_img} alt="" className='hero_img w-100 img-fluid' />
                    <div className='py-3 px-4'>
                        <h5>{props.title}</h5>
                        <div className='d-flex align-items-center'>
                            <img src={props.Avatar_img} alt="" className='img-fluid' />
                            <h6 className='ms-3 my-1'>{props.Subtitle}</h6>
                        </div>
                        <div className={`discover_price ${props.marTopBo}`}>
                            <div>
                                <h6 className='price'>{props.PriceTile1}</h6>
                                <h5>{props.Price1}</h5>
                            </div>
                            <div>
                                <h6 className='price'>{props.PriceTile2}</h6>
                                <h5>{props.Price2}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
