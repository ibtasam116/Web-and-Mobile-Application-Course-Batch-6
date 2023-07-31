import React from 'react'

// import { FaPaintBrush } from "react-icons/fa"
// import imageUrl from "../../assets/images/browse_categories/Image Placeholder1.png"
import imgBursh from "../../assets/images/browse_categories/PaintBrush1.png"

export default function Browse_Categories_Card(props) {
    return (
        <>
            <div className="col-sm-12 col-md-6 col-lg-3 mb-4 mb-lg-0 px-5 px-md-2 text-white">
                <div className='browse_back'>
                    <div className='browse-img'>
                        <div className='browse-icons-card'>
                            <img src={props.iconSrc} alt="" className='my-5'/>
                            {/* <FaPaintBrush className='my-5' /> */}
                        </div>
                    </div>
                    <div className='px-4 py-4'>
                        <h4>{props.Heading}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
