import React from 'react'
import "./Footer_Header.css"

import NTF_Logo from "../../../components/ntf_logo/NTF_Logo"

import { RxDiscordLogo } from "react-icons/rx"
import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai"
import { PiTwitterLogo } from "react-icons/pi"
import Subscribe_Card from '../../../components/subscribe_card/Subscribe_Card'

export default function Footer_Header() {
    return (
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
                <div className='footer-card'>
                    <NTF_Logo />
                    <p>NFT marketplace UI created with Anima for Figma.</p>
                    <p>Join our community</p>
                    <div>
                        <RxDiscordLogo className='footer-icon' />
                        <AiOutlineYoutube className='footer-icon' />
                        <PiTwitterLogo className='footer-icon' />
                        <AiOutlineInstagram className='footer-icon' />
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3">
                <div className='footer-card mt-3'>
                    <h4 className='text-white'>Explore</h4>
                    <p>Marketplace</p>
                    <p className='py-2'>Rankings</p>
                    <p>Connect a wallet</p>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5 border">
                <Subscribe_Card />
            </div>
        </div>
    )
}
