import React from 'react';

import Home_header from './(components)/home_header/home_header';
import Home_program_card from './(components)/home_program_card/home_program_card';
import Home_tour_card from './(components)/home_tour_card/home_tour_card';

import img1 from '../public/img/Campus1.png'

export default function Home() {
  return (
    <>
      <Home_header />

      <section class="course">
        <div class="PageBlock">
          <div class="verticalLine"></div>
          <div class="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br /> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
          <Home_program_card title="Undergraduate Programs" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
              soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non." />

          <Home_program_card title="Graduate Programs" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
              soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non." />

          <Home_program_card title="Adult Learning & Degree Completion" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
              soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non." />

        </div>
      </section>

      <section className="campus">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <Home_tour_card src="img1" title="DELHI"/>
          {/* <div className="campus-col">
            <img src="img/Campus1.png" alt="" />
            <div className="layer">
              <h3>DELHI</h3>
            </div>
          </div> */}
          <div className="campus-col">
            <img src="img/Campus2.png" alt="" />
            <div className="layer">
              <h3>HYDERABAD</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src="img/Campus3.png" alt="" />
            <div className="layer">
              <h3>MUMBAI</h3>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
