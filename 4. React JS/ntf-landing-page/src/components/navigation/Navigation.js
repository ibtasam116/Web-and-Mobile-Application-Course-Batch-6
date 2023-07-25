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

      <div class="nav-header">
        <nav class="navbar ">
          <div class="logo"><PiStorefront className='mb-1 me-3 icons' />NFT Marketplace</div>
          <a href="#" class="toggle-btn">
            <span class="bar barSmall"></span>
            <span class="bar"></span>
            <span class="bar barSmall"></span>
          </a>
          <div class="nav-menu">
            <ul>
              <li><a href="">Marketplace</a></li>
              <li><a href="">Rankings</a></li>
              <li><a href="">Connect a wallet</a></li>
              <li><Button btnTitle="Sign Up" size="btn-padding-Sm" hover="btn-hover-sm" icon={AiOutlineUser} /></li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

