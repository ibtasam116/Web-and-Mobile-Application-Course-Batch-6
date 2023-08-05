import React from 'react'

export default function Sections_Header(props) {
    return (
        <>
            <div className="row mb-4">
                <div className={`col-sm-12 col-md-10 offset-md-1 text-center ${props.color}`}>
                    <h1>{props.heading}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    )
}
