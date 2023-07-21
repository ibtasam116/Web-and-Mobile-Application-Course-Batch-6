import React from 'react'
import "./Trending_Collection.css"

import Trending_Collection_Card from '../../components/trending_collection_card/Trending_Collection_Card'

export default function Trending_Collection() {
    return (
        <>
            <div className="collection">
                <div className="container">
                    <div className="row py-3">
                        <div className="col-12">
                            <h4 className='collection_heading'>Trending Collection</h4>
                            <p className='collection_subheading mb-0 my-2'>Checkout our weekly updated trending collection.</p>
                        </div>
                    </div>
                    <div className="row">
                        <Trending_Collection_Card />
                        <Trending_Collection_Card />
                        <Trending_Collection_Card />
                    </div>
                </div>
            </div>
        </>
    )
}
