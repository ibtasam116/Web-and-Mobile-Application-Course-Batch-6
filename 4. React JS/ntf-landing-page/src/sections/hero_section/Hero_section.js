import React from 'react'
import "./Hero_section.css"

import { PiRocketLaunchDuotone } from "react-icons/pi";

import hero_img from "../../assets/images/hero_section/hero_placeholder.png";
import Avatar_Placeholder from "../../assets/images/hero_section/avatar_placeholder.png";


export default function Hero_section() {
    return (
        <div id="hero_Section">
            <div className="container  text-white">
                <div className="row">
                    <div className="col-6 p-3">
                        <h1 className='section_title text-wrap'>Discover digital art & Collect NFTs</h1>
                        <p className='section_description mb-0 my-3'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                        <button type="button" class="btn-sm hero-button my-4">
                            <PiRocketLaunchDuotone className='mb-1 me-2 h4' /> Get Started</button>
                        <div className='section_points'>
                            <span>
                                <h5>240k+</h5>
                                <h6>Total Sale</h6>
                            </span>
                            <span>
                                <h5>100k+</h5>
                                <h6>Auctions</h6>
                            </span>
                            <span>
                                <h5>240k+</h5>
                                <h6>Artists</h6>
                            </span>
                        </div>
                    </div>
                    <div className="col-6 p-4">
                        <div className='hero_right_side'>
                            <img src={hero_img} alt="" className='hero_img w-100 img-fluid' />
                            <div className='py-2 px-4'>

                                <h5>Space Walking</h5>
                                <div className='d-flex align-items-center'>
                                    <img src={Avatar_Placeholder} alt="" className='img-fluid' />
                                    <h6 className='ms-3 my-1'>Dish Studio</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
