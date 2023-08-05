import React from 'react'
import Header from "../../sections/header/Header"
import Happy_Menu_In_Menu from '../../sections/happy_menu_in_menu/Happy_Menu_In_Menu'
import Order_Button from '../../components/order_button/Order_Button'
import Our_Deals from '../../sections/our_Deals/Our_Deals'
import Our_Deals_Card from '../../components/our_deals_card/Our_Deals_Card'
import Menu_Deals from '../../sections/menu_deals/Menu_Deals'

export default function Menu() {
    return (
        <>
            <Header />
            <Happy_Menu_In_Menu />
            <Order_Button />
            <Menu_Deals />
        </>
    )
}
