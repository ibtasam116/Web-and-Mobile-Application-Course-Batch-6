import React from "react";

import img2 from '../../assets/images/image2.png'

import './Main_01.css'

export default function Main01() {
    return (
        <>

            <main id="main01">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                            <div class="fewWords mt-4">
                                <div class="text-center">
                                    <p class="fowWordsText mb-0">A few words about this blog platform, Ghost, and how this
                                        site was
                                        made</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 offset-md-4 px-5 px-md-0">
                            <div class="ghost my-3">
                                <div class="col text-center">
                                    <p class="ghostText mb-0">Why Ghost (& Figma) instead of Medium, WordPress or other
                                        options?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div class="pt-3">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <img class="image2" src={img2} alt="image2" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}