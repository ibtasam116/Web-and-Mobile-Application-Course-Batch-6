import React from 'react'

// import {AiOutlineShoppingCart} from "react-icons/ai"
import { BiLogoFacebook } from "react-icons/bi";

export default function TrickOrTreat_Card(props) {
    return (
        <div className="trick__content">
            <img src={props.img} alt="" className="trick__img" />
            <h3 className="trick__title">{props.trick_title}</h3>
            <span className="trick__subtitle">{props.trick_subtitle}</span>
            <span className="trick__price">${props.trick_price}</span>
            <button className="button trick__button">
                <BiLogoFacebook/>
                <i className='bx bx-cart-alt trick__icon'></i>
            </button>
        </div>
    )
}
