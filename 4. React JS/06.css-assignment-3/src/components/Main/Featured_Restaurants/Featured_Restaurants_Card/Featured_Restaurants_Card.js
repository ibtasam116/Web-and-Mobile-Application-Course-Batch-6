import React from 'react'

import {AiFillStar} from "react-icons/ai"

export default function Featured_Restaurants_Card(props) {
    return (
        <div className="col">
            <img src={props.srcLarge} className="card-img-top restaurantsImages"
                alt="..." />
                <div className="row my-3">
                    <div className="col-3">
                        <img src={props.srcSmall} alt=""/>
                    </div>
                    <div className="col-9 ps-4 pt-1">
                        <span className="pt-3 fw-bold">{props.title}</span><br />
                            <i className="fa-solid fa-star restColor"></i>
                            <AiFillStar className='restColor' style={{fontSize: 20}}/>
                            <span className="ps-1 restColor">{props.rate}</span>
                    </div>
                </div>
                <span className="now px-2 py-1 fw-bold" >{props.open}</span>
        </div>
    )
}
