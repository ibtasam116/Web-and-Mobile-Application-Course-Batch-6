import React from "react";

import img2 from '../../images/image2.png'

import './Main1.css'

export default function Main1() {
    return (
        <main>
            {/* Few Words */}
            <div className="fewWords mt-4">
                <div className="container">
                    <div className="row w-75 m-auto">
                        <div className="col text-center px-5">
                            <p className="fowWordsText mb-0">A few words about this blog platform, Ghost, and how this site was
                                made</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ghost */}
            <div className="ghost my-3">
                <div className="container">
                    <div className="row w-50 m-auto">
                        <div className="col text-center">
                            <p className="ghostText mb-0">Why Ghost (& Figma) instead of Medium, WordPress or other options?</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image 2 */}
            <div className="pt-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col"><img className="image2" src={img2} alt="image2" /></div>
                    </div>
                </div>
            </div>
        </main>
    )
}