import React from 'react'
import Alert from "../../components/alert/Alert"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../sections/header/Header'
import Home_Happy_Menu from '../../sections/home_happy_menu/Home_Happy_Menu'
import Our_Deals from '../../sections/home_our_Deals/Home_Our_Deals'
import FAQs from '../../sections/faqs/FAQs'
import Footer from '../../components/footer/Footer'

export default function Home() {
    return (
        <>
            <Alert heading="HURRAY!" title=" You should check our new " link="happy menu" />
            <Navbar />
            <Header />
            <Home_Happy_Menu />
            <Our_Deals />
            <FAQs />
            <Footer />
        </>
    )
}
