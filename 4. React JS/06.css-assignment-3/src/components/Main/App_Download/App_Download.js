import React from "react";

import "./App_Download.css"

import img1 from "../../../assets/images/Features.png"
import img2 from "../../../assets/images/App Download.png"

function App_Download() {
    return (


        <div class="container-fluid">
            <div class="row">
                <div class="col-12 install">
                    <img src={img1} class="img-fluid" alt="" />
                    <img src={img2} class="img-fluid" alt="" />
                </div>
            </div>
        </div>

    )
}

export default App_Download;