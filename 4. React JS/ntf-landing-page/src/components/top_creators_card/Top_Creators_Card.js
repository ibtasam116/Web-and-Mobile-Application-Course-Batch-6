import React from 'react'


export default function Top_Creators_Card(props) {
    return (
        <>
            <div className="col-3 creator_card rounded-4">
                <span className='count rounded-circle mt-3 ms-1'>{props.count}</span>
                <img src={props.img1Src} alt="" className='mx-5' />
                <div className='creator_content text-center mt-2'>
                    <h4>{props.cardHeading}</h4>
                    <span className='sale'>Total Sales:</span><span className='price ms-2'>34.53 ETH</span>
                </div>
            </div>
        </>
    )
}
