import React from 'react';

import './Header_Main.css'

import Image_Base from '../../../assets/images/Image Base.png'

import { TbMotorbike } from "react-icons/tb"
import { FaShoppingBag } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"
import { AiOutlineSearch } from 'react-icons/ai'

function Header_Main() {
    return (
        <header id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h1 className="starving text-white fw-bold">Are you starving?</h1>
                        <h6 className="fewClicks py-3">Within a few clicks, find meals that are accessible near you</h6>
                        <div className="white1 px-4">
                            <span className="delivery py-2 px-3">
                                <TbMotorbike className='h4 me-1' />
                                <span>Delivery</span>
                            </span>
                            <span className="pickup py-2 px-4 ms-1">
                                {/* <BsFillHandbagFill className='h6'/> */}
                                <FaShoppingBag className='h6 me-1' />
                                <span>Pickup</span>
                            </span>
                        </div>
                        <div className="white2 px-4">
                            <span className="typeAddress">
                                <MdLocationOn className='h5 me-1' />
                                <input className="yourAddress" type="text" name="" id="" placeholder="Enter Your Address" />
                            </span>
                            <button class="find text-white"><AiOutlineSearch className='h6 me-1 mt-1' />Find Food</button>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <div>
                            <img src={Image_Base} className="imageBase img-fluid" alt="Image Base" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header_Main;