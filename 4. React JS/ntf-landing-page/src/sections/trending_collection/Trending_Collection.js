import React from 'react'
import "./Trending_Collection.css"

import Section_Tops from '../../components/section_tops/Section_Tops'
import Trending_Collection_Card from '../../components/trending_collection_card/Trending_Collection_Card'

export default function Trending_Collection() {
    return (
        <>
            <div className="collection">
                <div className="container">
                    <div className="row py-3">
                        <Section_Tops heading="Trending Collection" subheading="Checkout our weekly updated trending collection."/>
                    </div>
                    <div className="row">
                        <Trending_Collection_Card />
                        <Trending_Collection_Card />
                        <Trending_Collection_Card />
                    </div>
                </div>
            </div>
        </>
    )
}
