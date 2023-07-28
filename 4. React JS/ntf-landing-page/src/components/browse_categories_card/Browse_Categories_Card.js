import React from 'react'

import { FaPaintBrush } from "react-icons/fa"
import img from "../../assets/images/browse_categories/Image Placeholder1.png"
import imgBursh from "../../assets/images/browse_categories/PaintBrush1.png"

export default function Browse_Categories_Card(props) {
    return (
        <>
            <div className="col-3 text-white">
                <div className='browse_back'>
                    <div className='browse-img img-fluid'>
                        <div className='browse-icons-card'>
                            <img src={imgBursh} alt="" className='my-5'/>
                            {/* <FaPaintBrush className='my-5' /> */}
                        </div>
                    </div>
                    <div className='px-4 py-2'>
                        <h3>Art</h3>                    </div>
                </div>
            </div>
        </>
    )
}
