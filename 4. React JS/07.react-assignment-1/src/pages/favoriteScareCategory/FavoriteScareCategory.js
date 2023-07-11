import React from 'react'
import FavoriteScareCategory_Card from '../../components/FavoriteScareCategory_Card/FavoriteScareCategory_Card'

export default function FavoriteScareCategory() {
    return (
        <section className="section category">
            <h2 className="section__title">Favorite Scare <br /> Category</h2>

            <div className="category__container container grid">
                <FavoriteScareCategory_Card />
                <FavoriteScareCategory_Card />
                <FavoriteScareCategory_Card />
            </div>
        </section>
    )
}
