import React from "react";

import img2 from '../../../assets/images/image2.png'

import './Main01.css'

export default function Main01() {
    return (
        <>
            <main id="main01">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="fewWords mt-4">
                                <div className="text-center">
                                    <p className="fowWordsText mb-0">A few words about this blog platform, Ghost, and how this
                                        site was
                                        made</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 offset-md-4 px-5 px-md-0">
                            <div className="ghost my-3">
                                <div className="col text-center">
                                    <p className="ghostText mb-0">Why Ghost (& Figma) instead of Medium, WordPress or other
                                        options?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="pt-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <img className="image2" src={img2} alt="image2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}