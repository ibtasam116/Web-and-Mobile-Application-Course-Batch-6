import React from 'react'
import FavoriteScareCategory_Card from '../../components/FavoriteScareCategory_Card/FavoriteScareCategory_Card'

import categoryImg1 from "../../assets/img/category1-img.png"

export default function FavoriteScareCategory() {
    return (
        <section className="section category">
            <h2 className="section__title">Favorite Scare <br /> Category</h2>

            <div className="category__container container grid">
                <FavoriteScareCategory_Card img={categoryImg1} title="Ghosts" description="Choose the ghosts, the scariest there are."/>
                <FavoriteScareCategory_Card />
                <FavoriteScareCategory_Card />
            </div>
        </section>
    )
}
