import React from 'react'
import Header from "../../sections/header/Header"
import Happy_Menu_In_Menu from '../../sections/happy_menu_in_menu/Happy_Menu_In_Menu'
import Order_Button from '../../components/order_button/Order_Button'
import Our_Deals from '../../sections/our_Deals/Our_Deals'
import Our_Deals_Card from '../../components/our_deals_card/Our_Deals_Card'

export default function Menu() {
    return (
        <>
            <Header />
            <Happy_Menu_In_Menu />
            <Order_Button />
            <Our_Deals>
                <Our_Deals_Card></Our_Deals_Card>
            </Our_Deals>
        </>
    )
}
