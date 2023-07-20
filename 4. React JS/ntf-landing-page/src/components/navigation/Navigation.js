import React from 'react'
import './Navigation.css'

import { PiStorefront } from "react-icons/pi"
export default function navigation() {
  return (
    <>
      <div id="navigation">
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex">
              <a href='#'><PiStorefront className='logo'/></a>
              <h5 id='main-title'>NFT Marketplace</h5>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>

    </>
  )
}

