import React from "react";

import "../Footer.css"
import Footer_Header_Card from "./Footer_Header_Card";

function Footer_Header() {
    return (
        <>
            <div className="row ms-3">
                <h4 className="fw-bold text-white">Our top cities</h4>
            </div>
            <div className="row row-cols-1 row-cols-md-5 row-cols-sm-3 g-2 pt-4 pb-5">
                <Footer_Header_Card Item1="San Francisco" Item2="Miami" Item3="San Diego" Item4="East Bay" Item5="Long Beach"/>
                <Footer_Header_Card Item1="San Francisco" Item2="Miami" Item3="San Diego" Item4="East Bay" Item5="Long Beach"/>
                <Footer_Header_Card Item1="San Francisco" Item2="Miami" Item3="San Diego" Item4="East Bay" Item5="Long Beach"/>
                <Footer_Header_Card Item1="San Francisco" Item2="Miami" Item3="San Diego" Item4="East Bay" Item5="Long Beach"/>
                <Footer_Header_Card Item1="San Francisco" Item2="Miami" Item3="San Diego" Item4="East Bay" Item5="Long Beach"/>
            </div>
            <div className="row-border"></div>
        </>
    )
}

export default Footer_Header;