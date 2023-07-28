import React from 'react'
import './Navigation.css'

import { PiStorefront } from "react-icons/pi"
import { AiOutlineUser } from 'react-icons/ai'
import Button from '../button/Button'

export default function navigation() {
  //   const toggleBtn = document.getElementsByClassName("toggle-btn")[0]
  // const navmenu = document.getElementsByClassName("nav-menu")[0]
  // toggleBtn.addEventListener("click", () => {
  // navmenu.classList.toggle("active")
  // })



  return (
    <>

      <div className="nav-header">
        <nav className="navbar ">
          <div className="logo"><PiStorefront className='mb-1 me-3 icons' />NFT Marketplace</div>
          <a href="#" className="toggle-btn">
            <span className="bar barSmall"></span>
            <span className="bar"></span>
            <span className="bar barSmall"></span>
          </a>
          <div className="nav-menu">
            <ul>
              <li><a href="">Marketplace</a></li>
              <li><a href="">Rankings</a></li>
              <li><a href="">Connect a wallet</a></li>
              <li><Button btnTitle="Sign Up" size="btn-padding-Sm" hover="btn-hover" icon={AiOutlineUser} marginEnd="icon-mar-sm" /></li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

