import React from 'react'
import Badge from '../../components/badge/Badge'
import Button from '../button/Button'


export default function Menu_Deal_Card(props) {
    return (
        <>
            <div class="col-sm-12 col-md-4">
                <div class="card w-100 mb-4 mb-md-0">
                    <img src={props.imgSrc} class="card-img-top" alt="Deal 6" />
                    <div class="card-body">
                        <h5 class="card-title">{props.title} <Badge badgeTitle="New"/> </h5>
                        <p class="card-text">{props.description}</p>
                        <Button btnColor="btn-success" title="Order Now" />
                        {/* <a href="contact.html" class="btn btn-success">Order Now</a> */}
                    </div>
                </div>
            </div>
        </>
    )
}
