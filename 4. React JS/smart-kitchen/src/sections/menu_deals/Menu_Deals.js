import React from 'react'
import Sections_Header from '../../components/sections_header/Sections_Header'
import Menu_Deal_Card from '../../components/menu_deal_card/Menu_Deal_Card'

import imgDeal_6 from '../../assets/images/deals/6.jpg'
import imgDeal_7 from '../../assets/images/deals/7.jpg'
import imgDeal_8 from '../../assets/images/deals/8.jpeg'

export default function Menu_Deals() {
    return (
        <>
            <div class="py-5" style={{ backgroundColor: "#F8F9FB" }}>
                <div class="container">

                    <Sections_Header
                        heading="Our Value Deals"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Delectus, voluptatum. Ducimus atque, maxime hic, mollitia quibusdam asperiores 
                            aperiam pariatur esse quidem sint officia inventore maiores veritatis nisi fuga corrupti deleniti!" />

                    <div class="row pt-4">
                        <Menu_Deal_Card
                            imgSrc={imgDeal_6}
                            title="Delicious Large Pizza Deal "
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />

                        <Menu_Deal_Card
                            imgSrc={imgDeal_7}
                            title="Weekend Special Deal "
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />

                        <Menu_Deal_Card
                            imgSrc={imgDeal_8}
                            title="Burger Deal "
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />

                        {/* <div class="col-sm-12 col-md-4">
                            <div class="card w-100 mb-4 mb-md-0">
                                <img src="./images/deals/7.jpg" class="card-img-top" alt="Deal 7">
                                    <div class="card-body">
                                        <h5 class="card-title">Delicious Large Pizza Deal <span
                                            class="badge bg-success">New</span></h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <a href="contact.html" class="btn btn-success">Order Now</a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <div class="card w-100 mb-4 mb-md-0">
                                <img src="./images/deals/8.jpeg" class="card-img-top" alt="Deal 8">
                                    <div class="card-body">
                                        <h5 class="card-title">Weekend Special Deal <span class="badge bg-success">New</span>
                                        </h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <a href="contact.html" class="btn btn-success">Order Now</a>
                                    </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}
