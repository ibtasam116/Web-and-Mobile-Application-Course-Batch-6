import React from 'react'
import TrickOrTreat_Card from '../../components/trickOrTreat_Card/TrickOrTreat_Card'

import Trick_treatImg1 from "../../assets/img/trick-treat1-img.png"
import Trick_treatImg2 from "../../assets/img/trick-treat2-img.png"
import Trick_treatImg3 from "../../assets/img/trick-treat3-img.png"
import Trick_treatImg4 from "../../assets/img/trick-treat4-img.png"
import Trick_treatImg5 from "../../assets/img/trick-treat5-img.png"
import Trick_treatImg6 from "../../assets/img/trick-treat6-img.png"

export default function TrickOrTreat() {
    return (
        <section className="section trick" id="trick">
            <h2 className="section__title">Trick Or Treat</h2>

            <div className="trick__container container grid">
                <TrickOrTreat_Card img={Trick_treatImg1} trick_title="Toffee" trick_subtitle="Candy" trick_price="11.99" />
                <TrickOrTreat_Card img={Trick_treatImg2} trick_title="Bone" trick_subtitle="Accessory" trick_price="8.99" />
                <TrickOrTreat_Card img={Trick_treatImg3} trick_title="Scarecrow" trick_subtitle="Accessory" trick_price="15.99" />
                <TrickOrTreat_Card img={Trick_treatImg4} trick_title="Candy Cane" trick_subtitle="Candy" trick_price="7.99" />
                <TrickOrTreat_Card img={Trick_treatImg5} trick_title="Pumpkin" trick_subtitle="Candy" trick_price="19.99" />
                <TrickOrTreat_Card img={Trick_treatImg6} trick_title="Ghost" trick_subtitle="Accessory" trick_price="17.99" />
            </div>
        </section>
    )
}
