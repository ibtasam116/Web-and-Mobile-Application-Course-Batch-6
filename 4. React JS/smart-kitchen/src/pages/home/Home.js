import React from 'react'
import Alert from "../../components/alert/Alert"
import Navbar from '../../components/nabar/Navbar'
import Header from '../../sections/header/Header'
import Happy_Menu from '../../sections/happy_menu/Happy_Menu'
import Our_Deals from '../../sections/our_Deals/Our_Deals'
import FAQs from '../../sections/faqs/FAQs'
import Footer from '../../components/footer/Footer'

export default function Home() {
    return (
        <>
            <Alert heading="HURRAY!" title=" You should check our new " link="happy menu" />
            <Navbar />
            <Header />
            <Happy_Menu />
            <Our_Deals />
            <FAQs />
            <Footer />
        </>
    )
}
