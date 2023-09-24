"use client"

import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import React from 'react'

const fetchNavLinks = async () => {
    const navLinks = await client.fetch(`*[_type == 'navLinks]`, {}, { cache: 'no-cache' });
    console.log('NavLinks', navLinks);
    return navLinks
}

export default function Navbar(props) {

    // navbar toggle menu start
    function showMenu() {
        document.getElementById("navLinks").style.right = "0";
    }

    function hideMenu() {
        document.getElementById("navLinks").style.right = "-200px";
    }
    // navbar toggle menu end

    const navLinks = fetchNavLinks();

    return (
        <>
            <section className="Sub-header">
                <nav>
                    <Link href="/" className="logo">Xplore
                        <i className="fab fa-staylinked"></i>kill
                    </Link>
                    <div className="nav-links" id="navLinks">
                        <i className="fa fa-times" onClick={hideMenu}></i>
                        <ul>
                            {
                                navLinks.map((link) => {
                                    return (
                                        <>
                                            <li><Link href={link.href}>{link.link}</Link></li>
                                        </>
                                    )
                                })
                            }
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/courses">Course</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <i className="fa fa-bars" onClick={showMenu}></i>
                </nav>
                <h1>{props.header_title}</h1>
            </section>
        </>

    )
}
