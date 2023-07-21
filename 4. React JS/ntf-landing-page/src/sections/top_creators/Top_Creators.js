import React from 'react'

import Section_Tops from '../../components/section_tops/Section_Tops'


export default function Top_Creators() {
    return (
        <>
            <div className="collection">
                <div className="container">
                    <div className="row py-3">
                        <Section_Tops heading="Top Creators" subheading="Checkout Top Rated Creators on the NFT Marketplace" />

                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className='creator_card'>
                            <h1>He</h1>
                            </div>
                        </div>
                        <div className="col-3"><h1>hi</h1></div>
                        <div className="col-3"></div>
                        <div className="col-3"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
