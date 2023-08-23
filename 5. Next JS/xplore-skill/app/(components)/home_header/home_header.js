import Link from 'next/link';

export default function Home_header() {
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
              <li><Link href="/home">Home</Link></li>
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
          <a href="#" class="hero_btn">Visit Us To Know More</a>
        </div>
      </section>
    </>
  )
}
