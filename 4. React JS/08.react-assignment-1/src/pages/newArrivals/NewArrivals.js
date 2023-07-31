import React from 'react'

export default function NewArrivals() {
    return (
        <>
            <section className="section new" id="new">
                <h2 className="section__title">New Arrivals</h2>

                <div className="new__container container">
                    <div className="swiper new-swiper">
                        <div className="swiper-wrapper">
                            <div className="new__content swiper-slide">
                                <div className="new__tag">New</div>
                                <img src="assets/img/new1-img.png" alt="" className="new__img" />
                                <h3 className="new__title">Haunted House</h3>
                                <span className="new__subtitle">Accessory</span>

                                <div className="new__prices">
                                    <span className="new__price">$14.99</span>
                                    <span className="new__discount">$29.99</span>
                                </div>

                                <button className="button new__button">
                                    <i className='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>

                            <div className="new__content swiper-slide">
                                <div className="new__tag">New</div>
                                <img src="assets/img/new2-img.png" alt="" className="new__img" />
                                <h3 className="new__title">Halloween Candle</h3>
                                <span className="new__subtitle">Accessory</span>

                                <div className="new__prices">
                                    <span className="new__price">$11.99</span>
                                    <span className="new__discount">$21.99</span>
                                </div>

                                <button className="button new__button">
                                    <i className='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>

                            <div className="new__content swiper-slide">
                                <div className="new__tag">New</div>
                                <img src="assets/img/new3-img.png" alt="" className="new__img" />
                                <h3 className="new__title">Witch Hat</h3>
                                <span className="new__subtitle">Accessory</span>

                                <div className="new__prices">
                                    <span className="new__price">$4.99</span>
                                    <span className="new__discount">$9.99</span>
                                </div>

                                <button className="button new__button">
                                    <i className='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>

                            <div className="new__content swiper-slide">
                                <div className="new__tag">New</div>
                                <img src="assets/img/new4-img.png" alt="" className="new__img" />
                                <h3 className="new__title">Rip</h3>
                                <span className="new__subtitle">Accessory</span>

                                <div className="new__prices">
                                    <span className="new__price">$24.99</span>
                                    <span className="new__discount">$44.99</span>
                                </div>

                                <button className="button new__button">
                                    <i className='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>

                            <div className="new__content swiper-slide">
                                <div className="new__tag">New</div>
                                <img src="assets/img/new5-img.png" alt="" className="new__img" />
                                <h3 className="new__title">Terrifying Crystal Ball</h3>
                                <span className="new__subtitle">Accessory</span>

                                <div className="new__prices">
                                    <span className="new__price">$5.99</span>
                                    <span className="new__discount">$12.99</span>
                                </div>

                                <button className="button new__button">
                                    <i className='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>

                            <div className="new__content swiper-slide">
                                <div className="new__tag">New</div>
                                <img src="assets/img/new6-img.png" alt="" className="new__img" />
                                <h3 className="new__title">Witch Broom</h3>
                                <span className="new__subtitle">Accessory</span>

                                <div className="new__prices">
                                    <span className="new__price">$7.99</span>
                                    <span className="new__discount">$14.99</span>
                                </div>

                                <button className="button new__button">
                                    <i className='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
