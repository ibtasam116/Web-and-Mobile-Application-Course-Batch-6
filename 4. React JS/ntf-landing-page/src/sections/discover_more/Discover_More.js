import React from 'react'
import './Discover_More.css'

import Section_Top from '../../components/section_tops/Section_Tops'
import Discover_More_Card from '../../components/discover_more_card/Discover_More_Card'

export default function Discover_More() {
    return (
        <>
            <div className="dicover">
                <div className="container py-3">
                    <div className="row py-3 text-white">
                        <Section_Top heading="Discover more NFTs" subheading="Explore new trending NFTs" />
                    </div>
                    <div className="row">
                        <Discover_More_Card />
                        <Discover_More_Card />
                        <Discover_More_Card />
                    </div>
                </div>
            </div >
        </>
    )
}
