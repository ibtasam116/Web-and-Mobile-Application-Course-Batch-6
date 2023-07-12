import React from 'react'

import RedButton from '../../components/redButton/RedButton'

import aboutImg from "../../assets/img/about-img.png"

export default function AboutHalloween() {
    return (
        <section className="section about" id="about">
            <div className="about__container container grid">
                <div className="about__data">
                    <h2 className="section__title about__title">About Halloween <br /> Night</h2>
                    <p className="about__description">Night of all the saints, or all the dead, is celebrated on October 31 and it is a
                        very fun international celebration, this celebration comes from ancient origins, and is already
                        celebrated by everyone.
                    </p>
                    <RedButton buttonTitle="Know more"/>
                </div>

                <img src={aboutImg} alt="" className="about__img" />
            </div>
        </section>
    )
}
