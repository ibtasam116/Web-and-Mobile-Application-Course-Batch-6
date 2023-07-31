import React from 'react'

export default function Trending_Collection_Card(props) {
    return (
            <div className={`col-sm-12 col-md-6 col-lg-4 trending_card text-center ${props.display}`}>
                <img src={props.img1Src} alt="" className='img-fluid hover-on' />
                <div className='trending_card_img my-3 gap-2'>
                    <img src={props.img2Src} alt="" className='img-fluid' />
                    <img src={props.img3Src} alt="" className='img-fluid' />
                    <div className='number_addition d-flex align-items-center justify-content-center'>
                        <h5 className='py-4'>1025+</h5>
                    </div>
                </div>
                <div className='px-2 text-start'>
                    <h5>{props.cardTitle}</h5>
                    <div className='d-flex align-items-center'>
                        <img src={props.img4Src} alt="" className='img-fluid' />
                        <p className='ms-2 mb-0'>{props.cardSubTitle}</p>
                    </div>
                </div>
            </div>
        )
}
