import React from 'react'
// import "./Discover_More_Card.css"
import Marketplace_Card from '../marketplace_card/Marketplace_Card'

export default function Discover_More_Card(props) {
    return (
        <>
            <Marketplace_Card
                hero_img={props.imgSrc}
                title="Space Walking"
                Avatar_img={props.imgSmall}
                Subtitle="Dish Studio"
                PriceTile1={props.PriceTile1}
                Price1={props.Price1}
                PriceTile2={props.PriceTile2}
                Price2={props.Price2}
                display={props.display}
                marTopBo="my-3"
                sizeForDis="col-sm-12 col-md-6 col-lg-4"
            />
        </>
    )
}
