import React from 'react'
import './Top_Creators.css'

import Section_Tops from '../../components/section_tops/Section_Tops'
import { PiRocketLaunchDuotone } from "react-icons/pi";
import Button from '../../components/button/Button';

import Top_Creators_Card from '../../components/top_creators_card/Top_Creators_Card'

import img1 from '../../assets/images/top_creators/Avatar Placeholder1.png'
import img2 from '../../assets/images/top_creators/Avatar Placeholder2.png'
import img3 from '../../assets/images/top_creators/Avatar Placeholder3.png'
import img4 from '../../assets/images/top_creators/Avatar Placeholder4.png'
import img5 from '../../assets/images/top_creators/Avatar Placeholder5.png'
import img6 from '../../assets/images/top_creators/Avatar Placeholder6.png'
import img7 from '../../assets/images/top_creators/Avatar Placeholder7.png'
import img8 from '../../assets/images/top_creators/Avatar Placeholder8.png'
import img9 from '../../assets/images/top_creators/Avatar Placeholder9.png'
import img10 from '../../assets/images/top_creators/Avatar Placeholder10.png'
import img11 from '../../assets/images/top_creators/Avatar Placeholder11.png'
import img12 from '../../assets/images/top_creators/Avatar Placeholder12.png'

export default function Top_Creators() {
    return (
        <>
            <div className="creator">
                <div className="container py-3">
                    <div className="row py-3">
                        <div className="col-sm-12 col-md-6">
                            <Section_Tops heading="Top Creators" subheading="Checkout Top Rated Creators on the NFT Marketplace" />
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-md-end my-3 my-md-0">
                            <Button btnTitle="View Rankings" size="btn-padding-lg" fontSize="btn-fontSize-lg" buttonColor="btn-color-section" hover="btn-hover-section" icon={PiRocketLaunchDuotone} iconSize="icon-size-lg" marginEnd="icon-mar-lg" />
                        </div>
                    </div>
                    <div className="row mx-5 mx-sm-0">
                        <Top_Creators_Card count="1" img1Src={img1} cardHeading="Keepitreal" />
                        <Top_Creators_Card count="2" img1Src={img2} cardHeading="DigiLab" />
                        <Top_Creators_Card count="3" img1Src={img3} cardHeading="GravityOne" />
                        <Top_Creators_Card count="4" img1Src={img4} cardHeading="Juanie" />
                    </div>
                    <div className="row mx-5 mx-sm-0 my-3">
                        <Top_Creators_Card count="5" img1Src={img5} cardHeading="BlueWhale" />
                        <Top_Creators_Card count="6" img1Src={img6} cardHeading="Mr Fox" />
                        <Top_Creators_Card count="7" img1Src={img7} cardHeading="Shroomie" />
                        <Top_Creators_Card count="8" img1Src={img8} cardHeading="robotica" />
                    </div>
                    <div className="row mx-5 mx-sm-0">
                        <Top_Creators_Card count="9" img1Src={img9} cardHeading="RustyRobot" />
                        <Top_Creators_Card count="10" img1Src={img10} cardHeading="animakid" />
                        <Top_Creators_Card count="11" img1Src={img11} cardHeading="Dotgu" />
                        <Top_Creators_Card count="12" img1Src={img12} cardHeading="Ghiblier" />
                    </div>


                </div>
            </div>
        </>
    )
}
