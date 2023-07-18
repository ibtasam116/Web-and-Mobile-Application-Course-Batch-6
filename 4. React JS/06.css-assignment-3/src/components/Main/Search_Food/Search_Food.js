import React from "react";

import "./Search_Food.css"
import Search_Food_Card from "./Search_Food_Card/Search_Food_Card";

import img1 from "../../../assets/images/Rearch Food/Image1.png"
import img2 from "../../../assets/images/Rearch Food/Image2.png"
import img3 from "../../../assets/images/Rearch Food/Image3.png"
import img4 from "../../../assets/images/Rearch Food/Image4.png"
import img5 from "../../../assets/images/Rearch Food/Image5.png"
import img6 from "../../../assets/images/Rearch Food/Image6.png"

import { FaGreaterThan, FaLessThan } from "react-icons/fa"

function Search_Food() {
    return (
        <div className="search-food">
            <div className="container pt-5 pb-4">
                <div className="row row-cols-2 g-2 pb-5">
                    <div className="col">
                        <h3 className="fw-bold">Search by Food</h3>
                    </div>
                    <div className="col text-end">
                        <span className="view-all me-2">View All</span>
                        <FaGreaterThan className="view-all" />
                        <span className="px-4 py-3 mx-3 search-lf">
                            <FaLessThan />
                        </span>
                        <span className="px-4 py-3 search-lf">
                        <FaGreaterThan />
                        </span>
                    </div>
                </div>
                <div className="row row-cols-6  g-4 text-center">
                    <Search_Food_Card src={img1} title="Pizza" />
                    <Search_Food_Card src={img2} title="Burger" />
                    <Search_Food_Card src={img3} title="Noodles" />
                    <Search_Food_Card src={img4} title="Sub-sandiwch" />
                    <Search_Food_Card src={img5} title="Chowmein" />
                    <Search_Food_Card src={img6} title="Steak" />
                </div>
            </div>
        </div>)
}

export default Search_Food;