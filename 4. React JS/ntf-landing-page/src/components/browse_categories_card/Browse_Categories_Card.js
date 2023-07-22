import React from 'react'

export default function Browse_Categories_Card(props) {
    return (
        <>
            <div className="col-3 p-4 text-white">
                <div className='browse_back'>
                    <div className='browse_card'>
                        <img src={props.iconSrc} alt="" className='browse_img img-fluid p-5' />
                    </div>
                    <div className='py-4 px-4'>
                        <h5>{props.Heading}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
