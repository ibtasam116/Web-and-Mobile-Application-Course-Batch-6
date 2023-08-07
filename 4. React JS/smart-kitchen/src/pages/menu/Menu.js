import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from "../../sections/header/Header"
import Happy_Menu_In_Menu from '../../sections/happy_menu_in_menu/Happy_Menu_In_Menu'
import Order_Button from '../../components/order_button/Order_Button'
import Menu_Deals from '../../sections/menu_deals/Menu_Deals'
import Footer from '../../components/footer/Footer'

export default function Menu() {
    return (
        <>
            <Navbar />
            <Header />
            <Happy_Menu_In_Menu />
            <Order_Button />
            <Menu_Deals />
            <Footer />
        </>
    )
}
