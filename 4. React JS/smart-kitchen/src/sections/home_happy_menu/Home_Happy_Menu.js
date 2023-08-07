import React from 'react'
import Home_Happy_Menu_Card from '../../components/home_happy_menu_card/Home_Happy_Menu_Card'

import deals4 from "../../assets/images/deals/4.jpg"
import deals5 from "../../assets/images/deals/5.jpg"
import deals6 from "../../assets/images/deals/6.jpg"
import Sections_Header from '../../components/sections_header/Sections_Header'

export default function Home_Happy_Menu() {
    return (
        <>
            <div id="menu" className="py-5">
                <div className="container">
                    <Sections_Header
                        heading="Our Happy Menu"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Perspiciatis fugiat eos perferendis ex, doloribus ratione saepe cumque 
                    dolore culpa aperiam voluptate quis, recusandae." />

                    <div className="row">
                        <Home_Happy_Menu_Card imgSrc={deals4} title="Rango Tango" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis." />
                        <Home_Happy_Menu_Card imgSrc={deals5} title="Burgizza Grill" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis." />
                        <Home_Happy_Menu_Card imgSrc={deals6} title="Crunchy Zinger Burger" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis." />
                    </div>
                </div>
            </div>
        </>
    )
}
