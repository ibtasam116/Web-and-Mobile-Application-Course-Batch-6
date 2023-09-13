import React from "react";
import "./Navbar.css";

import { MdOutlineMenu } from "react-icons/md"

export default function Navbar() {
    return (
        <>

            <nav class="navbar navbar-expand-lg sticky-top">
                <div class="container">
                    <a class="navbar-brand" href="#">nordic rose</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0"> </ul>
                        <span class="navbar-text d-flex justify-content-end">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#blog">blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#about">about</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#links">links</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#projects">projects</a>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </nav>

        </>
    )
}