import React from 'react'
import './Navigation.css'

import { PiStorefront } from "react-icons/pi"
export default function navigation() {
  return (
    <>
      <div id="navigation">
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex align-items-center py-2">
              <a href='#'><PiStorefront className='logo' /></a>
              <a><h5 id='main-title' className='text-white mt-2 ms-3'>NFT Marketplace</h5></a>
            </div>
            <div className="col-6 navigation_menus">
              <ul>
                <li><a href="#">Marketplace</a></li>
                <li><a href="#">Rankings</a></li>
                <li><a href="#">Connect a wallet</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

