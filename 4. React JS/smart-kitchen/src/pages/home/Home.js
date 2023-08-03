import React from 'react'
import Happy_Menu from '../../sections/happy_menu/Happy_Menu'
import Our_Deals from '../../sections/our_Deals/Our_Deals'
import FAQs from '../../sections/faqs/FAQs'
import Header from '../../sections/header/Header'

export default function Home() {
    return (
        <>
            <Header />
            <Happy_Menu />
            <Our_Deals />
            <FAQs />
        </>
    )
}
