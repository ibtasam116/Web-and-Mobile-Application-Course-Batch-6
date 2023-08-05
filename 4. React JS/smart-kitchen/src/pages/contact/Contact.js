import React from 'react'
import Header from '../../sections/header/Header'
import Contact_Us_Section from '../../sections/contact_us_section/Contact_Us_Section'
import Contact_Us_Location from '../../components/contact_us_location/Contact_Us_Location'

export default function Contact() {
    return (
        <>
            <Header />
            <Contact_Us_Section />
            <Contact_Us_Location />
        </>
    )
}
