import React from 'react'
import Alert from "../../components/alert/Alert"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../sections/header/Header'
import Contact_Us_Section from '../../sections/contact_us_section/Contact_Us_Section'
import Contact_Us_Location from '../../components/contact_us_location/Contact_Us_Location'
import Footer from '../../components/footer/Footer'

export default function Contact() {
    return (
        <>
            <Alert heading="HURRAY!" title=" You should check our new " link="happy menu" />
            <Navbar />
            <Header />
            <Contact_Us_Section />
            <Contact_Us_Location />
            <Footer footbgColor="bg-dark" textColor="text-white"/>
        </>
    )
}
