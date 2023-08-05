import React from 'react'

import menu1 from "../../assets/images/menu/1.jpeg"
import menu2 from "../../assets/images/menu/2.jpeg"
import Sections_Header from '../../components/sections_header/Sections_Header'
export default function Happy_Menu_In_Menu() {
    return (
        <>
            <div className="py-5">
                <div className="container">
                    <Sections_Header
                        heading="Our Happy Menu"
                        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Ea ipsam dignissimos accusamus ipsum, amet cupiditate" />

                    <div className="row text-center">
                        <div className="col">
                            <img src={menu1} alt="Menu 1" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row text-center mt-3">
                        <div className="col">
                            <img src={menu2} alt="Menu 2" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
