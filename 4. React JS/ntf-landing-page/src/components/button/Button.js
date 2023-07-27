import React from 'react'
import './Button.css'


export default function Button(props) {
    return (
        <>
            <button className={`button ${props.size} ${props.hover} ${props.fontSize} ${props.buttonColor} ${props.align}`}><props.icon className={`mb-1 ${props.iconSize} ${props.marginEnd} ${props.iconColor}`}/>{props.btnTitle}</button>
        </>
    )
}
