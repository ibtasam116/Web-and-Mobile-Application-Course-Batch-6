import React from 'react'
import "./Hero_section.css"

import { PiRocketLaunchDuotone } from "react-icons/pi";

import hero_img from "../../assets/images/hero_section/hero_placeholder.png";
import Avatar_Placeholder from "../../assets/images/hero_section/avatar_placeholder.png";

import Button from '../../components/button/Button';
import Section_points from "./Section_points";



export default function Hero_section() {
    return (
        <div id="hero_Section">
            <div className="container  text-white">
                <div className="row">
                    <div className="col-6 p-3">
                        <h1 className='section_title text-wrap'>Discover digital art & Collect NFTs</h1>
                        <p className='section_description mb-0 my-3'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                        <div className='my-4'>
                            <Button btnTitle="Get Started" size="btn-padding-lg" fontSize="btn-fontSize-lg" hover="btn-hover-sm" icon={PiRocketLaunchDuotone} iconSize="icon-size-lg" marginEnd="icon-mar-lg" />
                        </div>
                        <div className='section_points'>
                            <Section_points number="240" />
                            <Section_points number="100" />
                            <Section_points number="240" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
