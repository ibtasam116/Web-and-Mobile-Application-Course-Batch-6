import React from 'react'
import "./Footer_Bottom.css"

export default function Footer_Bottom() {

    const copyright = String.fromCodePoint(0x00A9);

    return (
        <>
            <div className='footer-line mt-3'></div>
            <div className='footer-heading'>
                <p className='mb-0 mt-3'>{copyright}NFT Market. Use this template freely.</p>
            </div>
        </>
    )
}
