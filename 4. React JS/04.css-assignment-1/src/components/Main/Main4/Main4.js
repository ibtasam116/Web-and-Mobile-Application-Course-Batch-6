import React from "react";

import './Main4.css'

export default function Main4() {
    return (
        <main>
            <div className="w-50 m-auto mb-5">
                <div className="w-75 m-auto">
                    <div className="darkline border bg-black"></div>
                    <div className="border">
                        <div className="signup text-center ">
                            <span>Sign up for the newsletter</span>
                        </div>
                        <div className="updates text-center ">
                            <p className="mb-0">If you want relevant updates occasionally, sign up for the private newsletter.
                                Your email is
                                never shared. </p>
                        </div>
                        <div className="px-5 mailenter">
                            <div className="row">
                                <div className="col-8 py-2 border input" type="text">
                                    <span>Enter your email...</span>
                                </div>
                                <div className="col-4 signupbtn py-2 text-center border">
                                    <span>Sign up</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}