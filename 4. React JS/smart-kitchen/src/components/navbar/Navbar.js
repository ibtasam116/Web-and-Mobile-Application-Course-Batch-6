import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <header id="navbar" className="position-sticky top-0">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark Pos">
                    <div className="container">
                        <Link to="/" className="navbar-brand" href="index.html">Smart Kitchen</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link active-link" aria-current="page" href="index.html">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/Menu" className="nav-link active-link" href="menu.html">Menu</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/Contact" className="nav-link active-link" href="contact.html">Contact</NavLink>
                                </li>
                            </ul>
                            {/* <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
