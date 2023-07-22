import React from 'react'
import './Navigation.css'

import { PiStorefront } from "react-icons/pi"
import { AiOutlineUser } from 'react-icons/ai'
import { RiMenu5Fill } from 'react-icons/ri'

export default function navigation() {
  return (
    <>
      <div id="navigation">
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex align-items-center">
              <a href='#'><PiStorefront className='logo' /></a>
              <a href='#' className='main-title'><h5 className='mt-2 ms-3'>NFT Marketplace</h5></a>
            </div>
            <div className="col-6 navigation_menus">
              <ul className=''>
                <li className='py-1'><a href="#">Marketplace</a></li>
                <li className='py-1'><a href="#">Rankings</a></li>
                <li className='py-1'><a href="#">Connect a wallet</a></li>
                <li><button type="button" class="small_button py-1 px-3"><AiOutlineUser className='mb-1 me-2' /> Sign Up</button></li>
              </ul>
            </div>
            <a href=""><RiMenu5Fill className='h1 menu_icon' /></a>
          </div>
        </div>
      </div>

    </>
  )
}

