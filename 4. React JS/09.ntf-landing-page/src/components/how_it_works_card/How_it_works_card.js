import React from 'react'
import icon_1 from "../../assets/images/How_it_works/icon_1.png"

export default function How_it_works_card(props) {
    return (
        <>
            <div className={`col-sm-12 col-md-6 col-lg-4 ${props.diplay}`}>
                <div className='py-3 text-center how-work-card'>
                    <img src={props.imgSrc} alt="" />
                    <h5>{props.heading}</h5>
                    <p className='px-4 pt-2'>{props.para}</p>
                </div>
            </div>
        </>
    )
}
