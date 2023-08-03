import React from 'react'

import cover from '../../assets/images/cover.jpg'

export default function Header() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={cover} className="d-block w-100" alt="Slider 1" />
                    </div>
                </div>
            </div>
        </>
    )
}
