import React from 'react'
import './Button.css'

import { AiOutlineUser } from 'react-icons/ai'


export default function Button(props) {
    return (
        <>
            <button className={`button ${props.size} ${props.hover} ${props.fontSize} ${props.buttonColor} ${props.align}`}><props.icon className={`mb-1 ${props.iconSize} ${props.marginEnd}`}/>{props.btnTitle}</button>
        </>
    )
}
