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
                <TrickOrTreat_Card img={Trick_treatImg1} trick_title="Toffee" trick_subtitle="Candy"/>
                <TrickOrTreat_Card img={Trick_treatImg2}/>
                <TrickOrTreat_Card img={Trick_treatImg3}/>
                <TrickOrTreat_Card img={Trick_treatImg4}/>
                <TrickOrTreat_Card img={Trick_treatImg5}/>
                <TrickOrTreat_Card img={Trick_treatImg6}/>
            </div>
        </section>
    )
}
