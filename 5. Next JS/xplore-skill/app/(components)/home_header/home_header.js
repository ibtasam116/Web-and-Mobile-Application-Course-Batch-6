import Link from 'next/link';
import Button from '../button/button';

export default function Home_header() {

  // var navLinks = document.getElementById("navLinks");

  function showMenu() {
    navLinks.style.right = "0";
  }

  function hideMenu() {
    navLinks.style.right = "-200px";
  }

  return (
    <>
      <section class="header">
        <nav>
          <Link href="index.html" class="logo">Xplore
            <i class="fab fa-staylinked"></i>kill
          </Link>
          <div class="nav-links" id="navLinks">
            <i class="fa fa-times" onclick="hideMenu()"></i>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/courses">Course</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <i class="fa fa-bars" onclick="showMenu()"></i>
        </nav>

        <div class="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          <Button btnTitle="Visit Us To Know More" />
          {/* <a href="#" class="hero_btn">Visit Us To Know More</a> */}
        </div>
      </section>
    </>
  )
}
