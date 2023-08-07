import React from 'react'
import Badge from '../badge/Badge'
import Button from '../button/Button'

export default function Home_Our_Deals_Card(props) {
    return (
        <>
            <div className="col-sm-12 col-md-4">
                <div className="card w-100">
                    <img src={props.imgSrc} className="card-img-top" alt="Deal 3" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title} <Badge badgeTitle="New" /></h5>
                        <p className="card-text">{props.description}</p>
                        <Button btnColor="btn-info text-white" title="Order Now" />
                    </div>
                </div>
            </div>
        </>
    )
}
