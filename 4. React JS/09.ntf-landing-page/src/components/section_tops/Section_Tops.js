import React from 'react'
import "./Section_Tops.css"

export default function section_tops(props) {
    return (
        <>
            <div className="col-12">
                <h4 className='section_heading'>{props.heading}</h4>
                <p className='section_subheading mb-0 my-2'>{props.subheading}</p>
            </div>
        </>
    )
}
