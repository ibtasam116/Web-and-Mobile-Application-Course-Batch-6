import React from 'react'
import "./Footer.css"

import Footer_Header from './footer_header/Footer_Header'
import Footer_Bottom from './footer_bottom/Footer_Bottom'


export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container px-5 py-4">
                    <Footer_Header />
                    <Footer_Bottom />
                </div>
            </div>
        </>
    )
}
