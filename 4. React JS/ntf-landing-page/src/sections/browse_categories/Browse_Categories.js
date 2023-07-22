import React from 'react'

import './Browse_Categories.css'
import Section_Top from '../../components/section_tops/Section_Tops'

import Browse_Categories_Card from '../../components/browse_categories_card/Browse_Categories_Card'

import icon1 from "../../assets/images/browse_categories/PaintBrush1.png"
import icon2 from "../../assets/images/browse_categories/Swatches2.png"
import icon3 from "../../assets/images/browse_categories/MusicNotes3.png"
import icon4 from "../../assets/images/browse_categories/Camera4.png"
import icon5 from "../../assets/images/browse_categories/Camera4.png"
import icon6 from "../../assets/images/browse_categories/Camera4.png"
import icon7 from "../../assets/images/browse_categories/Camera4.png"
import icon8 from "../../assets/images/browse_categories/Camera4.png"

export default function Browse_Categories() {
    return (
        <>
            <div className="browse">
                <div className="container py-3">
                    <div className="row py-3 text-white">
                        <Section_Top heading="Browse Categories" subheading="" />
                    </div>
                    <div className="row">
                        <Browse_Categories_Card iconSrc={icon1} Heading="Art"/>
                        <Browse_Categories_Card iconSrc={icon2} Heading="Collectibles"/>
                        <Browse_Categories_Card iconSrc={icon3} Heading="Music"/>
                        <Browse_Categories_Card iconSrc={icon4} Heading="Photography"/>
                    </div>
                    <div className="row">
                        <Browse_Categories_Card iconSrc={icon5} Heading="Video"/>
                        <Browse_Categories_Card iconSrc={icon6} Heading="Utility"/>
                        <Browse_Categories_Card iconSrc={icon7} Heading="Sport"/>
                        <Browse_Categories_Card iconSrc={icon8} Heading="Virtual Worlds"/>
                    </div>
                </div>
            </div >
        </>
    )
}
