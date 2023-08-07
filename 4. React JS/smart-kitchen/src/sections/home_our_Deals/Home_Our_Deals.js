import React from 'react'
import Home_Our_Deals_Card from '../../components/home_our_deals_card/Home_Our_Deals_Card'

import deal1 from "../../assets/images/deals/1.jpg"
import deal2 from "../../assets/images/deals/2.jpg"
import deal3 from "../../assets/images/deals/3.jpg"
import Sections_Header from '../../components/sections_header/Sections_Header'

export default function Home_Our_Deals() {
    return (
        <>
            <div class="py-5">
                <div class="container">
                    <Sections_Header
                        heading="Our Value Deals"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Perspiciatis fugiat eos perferendis ex, doloribus ratione saepe cumque 
                    dolore culpa aperiam voluptate quis, recusandae." />

                    <div class="row">
                        <Home_Our_Deals_Card imgSrc={deal1} title="Any Time Deals" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis." />
                        <Home_Our_Deals_Card imgSrc={deal2} title="Family Deals" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis." />
                        <Home_Our_Deals_Card imgSrc={deal3} title="Student Deals" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis." />
                    </div>
                </div>
            </div>
        </>
    )
}
