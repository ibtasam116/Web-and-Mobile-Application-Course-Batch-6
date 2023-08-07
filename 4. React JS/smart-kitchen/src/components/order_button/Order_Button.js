import React from 'react'
import "./Order_Button.css"

import Button from '../button/Button'

export default function Order_Button() {
    return (
        <>
            <div>
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="col">
                            <Button title="Order Now" btnColor="btn-success" class_Name="order-button" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
