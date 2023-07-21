import React from 'react'

export default function section_tops(props) {
    return (
        <>
            <div className="col-12">
                <h4 className='collection_heading'>{props.heading}</h4>
                <p className='collection_subheading mb-0 my-2'>{props.subheading}</p>
            </div>
        </>
    )
}
