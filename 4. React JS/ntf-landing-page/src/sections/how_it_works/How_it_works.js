import React from 'react'
import "./How_it_works.css"

import Section_Top from '../../components/section_tops/Section_Tops'
import How_it_works_card from '../../components/how_it_works_card/How_it_works_card'

import icon_1 from "../../assets/images/How_it_works/icon_1.png"
import icon_2 from "../../assets/images/How_it_works/icon_2.png"
import icon_3 from "../../assets/images/How_it_works/icon_3.png"

export default function How_it_works() {
    return (
        <>
            <div className='how-work'>
                <div className="container py-4 text-white">
                    <div className="row py-4">
                        <div className="col">
                            <Section_Top heading="How it works" subheading="Find out how to get started" />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <How_it_works_card imgSrc={icon_1} heading="Setup Your wallet" para="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner." />
                        <How_it_works_card diplay="mt-3 mt-md-0" imgSrc={icon_2} heading="Create Collection" para="Upload your work and setup your collection. Add a description, social links and floor price." />
                        <How_it_works_card diplay="d-none d-lg-block" imgSrc={icon_3} heading="Start Earning" para="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others." />
                    </div>
                </div>
            </div>
        </>
    )
}
