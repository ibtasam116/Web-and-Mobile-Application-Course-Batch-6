import React from 'react'
import "./Top_Creators_Card.css"

export default function Top_Creators_Card(props) {
    return (
        <>
            <div className="col-xs-12 col-sm-6 col-lg-3 my-3 my-sm-3 my-lg-0">
                <div className='creator_card rounded-4'>
                    <div className='px-3 pt-3'>
                    <span className='rounded-circle count'>{props.count}</span>
                    </div>
                    <div className='d-flex justify-content-center'>
                    <img src={props.img1Src} alt=""/>
                    </div>
                    <div className='creator_content text-center my-2'>
                        <h4>{props.cardHeading}</h4>
                        <span className='sale'>Total Sales:</span><span className='price ms-2 text-white'>34.53 ETH</span>
                    </div>
                </div>
            </div>
        </>
    )
}
