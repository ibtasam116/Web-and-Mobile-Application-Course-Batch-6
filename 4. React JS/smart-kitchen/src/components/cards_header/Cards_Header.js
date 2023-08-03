import React from 'react'

export default function Cards_Header(props) {
    return (
        <>
            <div className="row mb-4">
                <div className="col-sm-12 col-md-10 offset-md-1 text-center">
                    <h1>{props.heading}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    )
}
