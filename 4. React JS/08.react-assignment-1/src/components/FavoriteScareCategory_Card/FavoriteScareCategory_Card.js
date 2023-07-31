import React from 'react'

export default function FavoriteScareCategory_Card(props) {
    return (
        <div className="category__data">
            <img src={props.img} alt="" className="category__img" />
            <h3 className="category__title">{props.title}</h3>
            <p className="category__description">{props.description}</p>
        </div>
    )
}
