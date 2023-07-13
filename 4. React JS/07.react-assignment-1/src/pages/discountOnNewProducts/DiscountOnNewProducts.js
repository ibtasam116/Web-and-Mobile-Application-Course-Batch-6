import React from 'react'

import RedButton from '../../components/redButton/RedButton'

import discountImg from "../../assets/img/discount-img.png"

export default function DiscountOnNewProducts() {
    return (
        <section className="section discount">
            <div className="discount__container container grid">
                <div className="discount__data">
                    <h2 className="discount__title">50% Discount <br /> On New Products</h2>
                    <RedButton buttonTitle="Go to new"/>
                </div>

                <img src={discountImg} alt="" className="discount__img" />
            </div>
        </section>
    )
}
