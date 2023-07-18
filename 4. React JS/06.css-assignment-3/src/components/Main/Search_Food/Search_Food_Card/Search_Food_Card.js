import React from 'react'

export default function Search_Food_Card(props) {
    return (
        <div className="col">
            <img src={props.src} className="card-img-top search-images" alt="..." />
            <h6 className="pt-3 fw-bold">{props.title}</h6>
        </div>)
}
