import React from 'react'
import './Button.css'

import { AiOutlineUser } from 'react-icons/ai'


export default function Button(props) {
    return (
        <>
            <button className={`button ${props.size} ${props.new}`}><props.icon className='mb-1 me-2'/>{props.btnTitle}</button>
        </>
    )
}
