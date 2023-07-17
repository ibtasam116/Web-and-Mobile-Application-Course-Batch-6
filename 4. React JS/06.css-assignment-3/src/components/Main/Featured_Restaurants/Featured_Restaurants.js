import React from "react";

import "./Featured_Restaurants.css"
import Featured_Restaurants_Card from "./Featured_Restaurants_Card/Featured_Restaurants_Card";


import img1 from "../../../assets/images/Featured Restaurants/Image1.png"
import img1_1 from "../../../assets/images/Featured Restaurants/Image1-1.png"
import img2 from "../../../assets/images/Featured Restaurants/Image2.png"
import img2_2 from "../../../assets/images/Featured Restaurants/Image2-2.png"
import img3 from "../../../assets/images/Featured Restaurants/Image3.png"
import img3_3 from "../../../assets/images/Featured Restaurants/Image3-3.png"
import img4 from "../../../assets/images/Featured Restaurants/Image4.png"
import img4_4 from "../../../assets/images/Featured Restaurants/Image4-4.png"
import img5 from "../../../assets/images/Featured Restaurants/Image5.png"
import img5_5 from "../../../assets/images/Featured Restaurants/Image5-5.png"
import img6 from "../../../assets/images/Featured Restaurants/Image6.png"
import img6_6 from "../../../assets/images/Featured Restaurants/Image6-6.png"
import img7 from "../../../assets/images/Featured Restaurants/Image7.png"
import img7_7 from "../../../assets/images/Featured Restaurants/Image7-7.png"
import img8 from "../../../assets/images/Featured Restaurants/Image8.png"
import img8_8 from "../../../assets/images/Featured Restaurants/Image8-8.png"

function Featured_Restaurants() {
    return (
        <div class="restaurants">
            <div class="container py-5">
                <h3 class="pb-4 fw-bold text-center">Featured Restaurants</h3>
                <div class="row row-cols-1 row-cols-md-4 g-2">

                    <Featured_Restaurants_Card srcLarge={img1} srcSmall={img1_1} title="Foodworld" rate={46} open="Opens tomorrow" />
                    <Featured_Restaurants_Card srcLarge={img2} srcSmall={img2_2} title="Pizzahub" rate={40} open="Opens tomorrow" />
                    <Featured_Restaurants_Card srcLarge={img3} srcSmall={img3_3} title="Donuts hut" rate={20} open="Opens Now" />
                    <Featured_Restaurants_Card srcLarge={img4} srcSmall={img4_4} title="Donuts hut" rate={50} open="Opens Now" />
                </div>
                <div class="row row-cols-1 row-cols-md-4 g-2 mt-4">
                    <Featured_Restaurants_Card srcLarge={img5} srcSmall={img5_5} title="Ruby Tuesday" rate={26} open="Opens Now" />
                    <Featured_Restaurants_Card srcLarge={img6} srcSmall={img6_6} title="Kuakata Fried Chicken" rate={53} open="Opens Now" />
                    <Featured_Restaurants_Card srcLarge={img7} srcSmall={img7_7} title="Red Square" rate={45} open="Opens Now" />
                    <Featured_Restaurants_Card srcLarge={img8} srcSmall={img8_8} title="Taco Bell" rate={35} open="Opens Now" openColor="tomorrow" />

                </div>

                {/* 
                    
                    
                   
                    <div class="col">
                        <img src="./images/Featured Restaurants/Image8.png" class="card-img-top restaurantsImages"
                            alt="...">
                            <div class="row my-3">
                                <div class="col-3">
                                    <img src="./images/Featured Restaurants/Image8-8.png" alt="">
                                </div>
                                <div class="col-9 ps-4 pt-1">
                                    <span class="pt-3 fw-bold">Taco Bell</span><br>
                                        <i class="fa-solid fa-star restColor"></i>
                                        <span class="ps-1 restColor">35</span>
                                </div>
                            </div>
                            <span class="now px-2 py-1 fw-bold">Open Now</span>
                    </div> 
            </div>*/}
            <div class="text-center mt-5">
                <button class="view py-2 px-4 fw-bold">
                    <span>View All</span>
                    <i class="fa-solid fa-greater-than"></i>
                </button>
            </div>
        </div>
        </div >
    )
}

export default Featured_Restaurants;