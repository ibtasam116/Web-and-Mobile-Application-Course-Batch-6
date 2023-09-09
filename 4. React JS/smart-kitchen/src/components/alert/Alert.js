import React from 'react'
import { Link } from 'react-router-dom'

export default function Alert(props) {
    return (
        <>
            <header style={{ backgroundColor: '#CFF4FC' }}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="alert alert-info alert-dismissible fade show mb-0 px-0" role="alert">
                                <strong>{props.heading}</strong>{props.title}<Link to="/Menu" className="alert-link">{props.link}</Link>.
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
