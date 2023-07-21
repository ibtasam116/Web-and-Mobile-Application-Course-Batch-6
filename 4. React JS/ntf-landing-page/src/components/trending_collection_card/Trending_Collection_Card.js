import React from 'react'

import img1 from '../../assets/images/trending_collection/Primary Photo Placeholder.png'
import img2 from '../../assets/images/trending_collection/Secondary Photo Placeholder1.png'
import img3 from '../../assets/images/trending_collection/Secondary Photo Placeholder2.png'
import img4 from '../../assets/images/trending_collection/Avatar Placeholder3.png'
// import Trending_Collection_Card from '../../../components/Trending_Collection_Card/Trending_Collection_Card'


export default function Trending_Collection_Card() {
    return (
            <div className="col-sm-12 col-md-6 col-lg-4  trending_card text-center">
                <img src={img1} alt="" className='img-fluid' />
                <div className='trending_card_img my-3'>
                    <img src={img2} alt="" className='img-fluid' />
                    <img src={img3} alt="" className='img-fluid' />
                    <div className='number_addition d-flex align-items-center justify-content-center'>
                        <h5 className='px-4 py-4'>1025+</h5>
                    </div>
                </div>
                <div className='px-2 text-start'>
                    <h5>DSGN Animals</h5>
                    <div className='d-flex align-items-center'>
                        <img src={img4} alt="" className='img-fluid' />
                        <p className='ms-2 mb-0'>Mrfox</p>
                    </div>
                </div>
            </div>
        )
}
