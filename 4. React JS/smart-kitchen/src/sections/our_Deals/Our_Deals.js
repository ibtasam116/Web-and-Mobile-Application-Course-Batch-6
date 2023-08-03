import React from 'react'
import Cards_Header from '../../components/cards_header/Cards_Header'
import Our_Deals_Card from '../../components/our_deals_card/Our_Deals_Card'

import deal1 from "../../assets/images/deals/1.jpg"
import deal2 from "../../assets/images/deals/2.jpg"
import deal3 from "../../assets/images/deals/3.jpg"

export default function Our_Deals() {
    return (
        <>
            <div class="py-5">
                <div class="container">
                    <Cards_Header
                        heading="Our Value Deals"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Perspiciatis fugiat eos perferendis ex, doloribus ratione saepe cumque 
                    dolore culpa aperiam voluptate quis, recusandae." />

                    <div class="row">
                        <Our_Deals_Card imgSrc={deal1} title="Any Time Deals" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis." />
                        <Our_Deals_Card imgSrc={deal2} title="Family Deals" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis." />
                        <Our_Deals_Card imgSrc={deal3} title="Student Deals" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis." />
                    </div>
                </div>
            </div>
        </>
    )
}
