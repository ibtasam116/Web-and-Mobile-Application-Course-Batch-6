import React from "react";

import './ContactUs.css'

import imgOrange from '../../images/orange-dish.png'

export default function ContactUs() {
    return (
        <div class="contact">
            <div class="container-fluid">
                <div class="row my-5">
                    <div class="col-xl-6 col-lg-6 col-sm-12 contact-right-p">
                        <h1>Contact Us</h1>
                        <div class="form-floating mb-3">
                            <input type="name" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="phone" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Phone Number</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Email</label>
                        </div>
                        <div class="form-floating">
                            <textarea class="form-control height-textarea" placeholder="Leave a comment here" id="floatingTextarea2"
                            ></textarea>
                            <label for="floatingTextarea2">Comments</label>
                        </div>
                        <button class="px-4 bg-danger border-danger text-white py-1 mt-4">SEND</button>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-sm-12 text-end">
                        <img src={imgOrange} class="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}