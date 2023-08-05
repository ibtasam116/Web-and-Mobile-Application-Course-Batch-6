import React from 'react'
import Sections_Header from '../../components/sections_header/Sections_Header'

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

                        <div class="col-sm-12 col-md-4">
                            <div class="card w-100 mb-4 mb-md-0">
                                <img src="./images/deals/6.jpg" class="card-img-top" alt="Deal 6" />
                                <div class="card-body">
                                    <h5 class="card-title">Burger Deal <span class="badge bg-success">New</span></h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <a href="contact.html" class="btn btn-success">Order Now</a>
                                </div>
                            </div>
                        </div>
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
