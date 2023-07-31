import React from 'react'
import "./Subscribe_Card.css"

import Button from '../../components/button/Button'
import { PiEnvelopeSimpleLight } from 'react-icons/pi'

export default function Subscribe_Card(props) {
    return (
        <>
                <h3 className={`${props.SubsHeadSize} ${props.footerHeadSize}`}>Join our weekly digest</h3>
                <p className={`${props.SubsSize} ${props.footerSize}`}>Get exclusive promotions & updates straight to your inbox.</p>
                <div className='subscribe_buttons text-center'>
                    <input type="text" placeholder='Enter your email here' />
                    <Button
                        btnTitle="Subscribe"
                        size="btn-padding-lg"
                        hover="btn-hover"
                        icon={PiEnvelopeSimpleLight}
                        marginEnd="icon-mar-lg" />
                </div>
        </>
    )
}
