import React from 'react'

export default function Home_tour_card(props) {
    return (
        <>
            <div className="campus-col">
                <img src={props.src} alt="" />
                <div className="layer">
                    <h3>{props.title}</h3>
                </div>
            </div>
        </>
    )
}
