"use client"
import Link from 'next/link';
import Button from '../button/button';
import { client } from '@/sanity/lib/client';

const fetchNavLinks = async () => {
  const navLinks = await client.fetch(`*[_type == 'navLinks']`, {}, { cache: 'no-cache' });
  // console.log("NavLinks", navLinks);
  return navLinks
}

export default async function Home_header() {

  // navbar toggle menu start
  function showMenu() {
    document.getElementById("navLinks").style.right = "0";
  }

  function hideMenu() {
    document.getElementById("navLinks").style.right = "-200px";
  }
  // navbar toggle menu end

  const navLinks = await fetchNavLinks();

  return (
    <>
      <section class="header">
        <nav>
          <Link href="/" class="logo">Xplore
            <i class="fab fa-staylinked"></i>kill
          </Link>
          <div class="nav-links" id="navLinks">
            <i class="fa fa-times" onClick={hideMenu}></i>
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

            </ul>
          </div>
          <i class="fa fa-bars" onClick={showMenu}></i>
        </nav >

        <div class="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          <Button btnHref="/blog" btnTitle="Visit Us To Know More" />
          {/* <a href="#" class="hero_btn">Visit Us To Know More</a> */}
        </div>
      </section >
    </>
  )
}
