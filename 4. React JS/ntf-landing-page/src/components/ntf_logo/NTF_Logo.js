import React from 'react'
import "./NTF_Logo.css"

import { PiStorefront } from "react-icons/pi"

export default function ntf_logo() {
    return (
        <>
            <div className="logo"><PiStorefront className='mb-1 me-3 icons' />NFT Marketplace</div>
        </>
    )
}
