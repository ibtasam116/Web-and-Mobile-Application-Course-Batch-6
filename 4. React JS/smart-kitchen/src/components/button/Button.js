import React from 'react'

export default function Button(props) {
    return (
        <>
            <a href="contact.html" className={`btn ${props.btnColor}`}>{props.title}</a>
        </>
    )
}
