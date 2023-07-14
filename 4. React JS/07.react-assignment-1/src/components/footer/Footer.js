import React from 'react'

import logo from '../../assets/img/logo.png'
import footerImg1 from '../../assets/img/footer1-img.png'
import footerImg2 from '../../assets/img/footer2-img.png'
import Footer_Content from '../footer_Content/Footer_Content'


import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from 'react-icons/bs';

export default function Footer() {
    return (
        <footer className="footer section">
            <div className="footer__container container grid">
                <div className="footer__content">
                    <a href="#" className="footer__logo">
                        <img src={logo} alt="" className="footer__logo-img" />
                        Halloween
                    </a>

                    <p className="footer__description">Enjoy the scariest night <br /> of your life.</p>

                    <div className="footer__social">
                        <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                            <BiLogoFacebook />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                            <AiFillInstagram />
                        </a>
                        <a href="https://twitter.com/" target="_blank" className="footer__social-link">
                            <BsTwitter />
                        </a>
                    </div>
                </div>

                <Footer_Content footer_title="About" footer_link1="About Us" footer_link2="Features" footer_link3="News" />
                <Footer_Content footer_title="Our Services" footer_link1="Pricing" footer_link2="Discounts" footer_link3="Shipping mode" />
                <Footer_Content footer_title="Our Company" footer_link1="Blog" footer_link2="About us" footer_link3="Our mision" />
            </div>

            <span className="footer__copy">&#169; Bedimcode. All rigths reserved</span>

            <img src={footerImg1} alt="" className="footer__img-one" />
            <img src={footerImg2} alt="" className="footer__img-two" />
        </footer>
        
    )
}
