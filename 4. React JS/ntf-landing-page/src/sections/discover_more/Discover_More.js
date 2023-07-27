import React from 'react'
import './Discover_More.css'

import Section_Top from '../../components/section_tops/Section_Tops'
import Discover_More_Card from '../../components/discover_more_card/Discover_More_Card'

import { AiOutlineEye } from "react-icons/ai";
import Button from '../../components/button/Button';


import img1 from "../../assets/images/discover_more/Image Placeholder1.png"
import img2 from "../../assets/images/discover_more/Image Placeholder2.png"
import img3 from "../../assets/images/discover_more/Image Placeholder3.png"
import img4 from "../../assets/images/discover_more/Avatar Placeholder1.png"
import img5 from "../../assets/images/discover_more/Avatar Placeholder2.png"
import img6 from "../../assets/images/discover_more/Avatar Placeholder3.png"

console.log(1 + 2);

export default function Discover_More() {
    return (
        <>
            <div className="dicover">
                <div className="container py-3">
                    <div className="row py-3">
                        <div className="col-sm-12 col-md-6">
                            <Section_Top heading="Discover more NFTs" subheading="Explore new trending NFTs" />
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-md-end my-3 my-md-0">
                            <Button btnTitle="See All" size="btn-padding-lg" fontSize="btn-fontSize-lg" buttonColor="btn-color-section" hover="btn-hover-section" icon={AiOutlineEye} iconSize="icon-size-lg" marginEnd="icon-mar-lg" iconColor="icon-color" />
                        </div>
                    </div>
                    <div className="row">
                        <Discover_More_Card imgSrc={img1} heading="Distant Galaxy" imgSmall={img4} subheading="MoonDancer" PriceTile1="Price" Price1="1.63 ETH" PriceTile2="Highest Bid" Price2="0.33 wETH" />
                        <Discover_More_Card display="d-none d-md-block d-lg-block" imgSrc={img2} heading="Life On Edena" imgSmall={img5} subheading="NebulaKid" PriceTile1="Price" Price1="1.63 ETH" PriceTile2="Highest Bid" Price2="0.33 wETH" />
                        <Discover_More_Card display="d-none d-lg-block" imgSrc={img3} heading="AstroFiction" imgSmall={img6} subheading="Spaceone" PriceTile1="Price" Price1="1.63 ETH" PriceTile2="Highest Bid" Price2="0.33 wETH" />
                    </div>
                </div>
            </div >
        </>
    )
}
