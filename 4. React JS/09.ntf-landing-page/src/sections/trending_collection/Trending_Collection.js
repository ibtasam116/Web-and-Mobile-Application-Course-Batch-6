import React from 'react'
import "./Trending_Collection.css"

import Section_Tops from '../../components/section_tops/Section_Tops'
import Trending_Collection_Card from '../../components/trending_collection_card/Trending_Collection_Card'

import img1 from '../../assets/images/trending_collection/Primary Photo Placeholder1.png'
import img2 from '../../assets/images/trending_collection/Secondary Photo Placeholder1.png'
import img3 from '../../assets/images/trending_collection/Secondary Photo Placeholder2.png'
import img4 from '../../assets/images/trending_collection/Avatar Placeholder1.png'

import img5 from '../../assets/images/trending_collection/Primary Photo Placeholder2.png'
import img6 from '../../assets/images/trending_collection/Secondary Photo Placeholder3.png'
import img7 from '../../assets/images/trending_collection/Secondary Photo Placeholder4.png'
import img8 from '../../assets/images/trending_collection/Avatar Placeholder2.png'

import img9 from '../../assets/images/trending_collection/Primary Photo Placeholder3.png'
import img10 from '../../assets/images/trending_collection/Secondary Photo Placeholder5.png'
import img11 from '../../assets/images/trending_collection/Secondary Photo Placeholder6.png'
import img12 from '../../assets/images/trending_collection/Avatar Placeholder3.png'

export default function Trending_Collection() {
    return (
        <>
            <div className="collection">
                <div className="container">
                    <div className="row py-3">
                        <Section_Tops heading="Trending Collection" subheading="Checkout our weekly updated trending collection."/>
                    </div>
                    <div className="row">
                        <Trending_Collection_Card img1Src={img1} img2Src={img2} img3Src={img3} img4Src={img4} cardTitle="DSGN Animals" cardSubTitle="Mrfox" />
                        <Trending_Collection_Card display="d-none d-md-block d-lg-block" img1Src={img5} img2Src={img6} img3Src={img7} img4Src={img8} cardTitle="Magic Mushrooms" cardSubTitle="Shroomie" />
                        <Trending_Collection_Card display="d-none d-lg-block" img1Src={img9} img2Src={img10} img3Src={img11} img4Src={img12} cardTitle="Disco Machines" cardSubTitle="BeKind2Robots" />
                    </div>
                </div>
            </div>
        </>
    )
}
