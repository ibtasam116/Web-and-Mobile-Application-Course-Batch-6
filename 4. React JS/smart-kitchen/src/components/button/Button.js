import React from 'react'
import { Link } from 'react-router-dom'

export default function Button(props) {
    return (
        <>
            <Link to="/Contact" className={`btn ${props.btnColor} ${props.class_Name}`}>{props.title}</Link>
        </>
    )
}
