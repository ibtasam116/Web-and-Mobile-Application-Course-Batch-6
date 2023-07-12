import React from 'react'

export default function TrickOrTreat_Card(props) {
    return (
        <div className="trick__content">
            <img src={props.img} alt="" className="trick__img" />
            <h3 className="trick__title">{props.trick_title}</h3>
            <span className="trick__subtitle">{props.trick_subtitle}</span>
            <span className="trick__price">$11.99</span>
            <button className="button trick__button">
                <i className='bx bx-cart-alt trick__icon'></i>
            </button>
        </div>
    )
}
