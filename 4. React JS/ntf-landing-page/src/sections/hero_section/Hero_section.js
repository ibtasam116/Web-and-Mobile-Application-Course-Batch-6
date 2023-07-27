import React from 'react'
import "./Hero_section.css"

import { PiRocketLaunchDuotone } from "react-icons/pi";

import hero_img from "../../assets/images/hero_section/hero_placeholder.png";
import Avatar_img from "../../assets/images/hero_section/avatar_placeholder.png";

import Button from '../../components/button/Button';
import Section_points from "./Section_points";
import Marketplace_Card from '../../components/marketplace_card/Marketplace_Card';



export default function Hero_section() {
    return (
        <div id="hero_Section">
            <div className="container text-white">
                <div className="row">
                    <div className="col-md-6 col-sm-12 p-3">
                        <h1 className='section_title text-wrap'>Discover digital art & Collect NFTs</h1>
                        <p className='section_description mb-0 my-3'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                        <div className='my-3 my-sm-4 my-md-3 my-lg-4 text-center text-md-start text-lg-start'>
                            <Button btnTitle="Get Started" size="btn-padding-lg" fontSize="btn-fontSize-lg" hover="btn-hover" icon={PiRocketLaunchDuotone} iconSize="icon-size-lg" marginEnd="icon-mar-lg" />
                        </div>
                        <div className='section_points'>
                            <Section_points number="240" />
                            <Section_points number="100" />
                            <Section_points number="240" />
                        </div>
                    </div>
                    <Marketplace_Card hero_img={hero_img} title="Space Walking" Avatar_img={Avatar_img} Subtitle="Dish Studio" />
                </div>
            </div>
        </div>
    )
}
