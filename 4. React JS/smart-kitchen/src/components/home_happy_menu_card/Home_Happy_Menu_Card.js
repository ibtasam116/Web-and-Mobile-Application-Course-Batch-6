import React from 'react'
import Button from '../button/Button'

export default function Home_Happy_Menu_Card(props) {
    return (
        <>
            <div className="col-sm-12 col-md-4 ">
                <div className="card w-100 mb-4 mb-md-0">
                    <img src={props.imgSrc} className="card-img-top" alt="Menu item 1" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <Button btnColor="btn-success" title="Order Now" />
                    </div>
                </div>
            </div>
        </>
    )
}
