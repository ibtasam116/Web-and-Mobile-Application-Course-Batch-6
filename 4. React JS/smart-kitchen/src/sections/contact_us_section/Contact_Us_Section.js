import React from 'react'
import Sections_Header from '../../components/sections_header/Sections_Header'
import Contact_Us_Cards from '../../components/contact_us_cards/Contact_Us_Cards'


export default function Contact_Us_Section() {
    return (
        <>

            <div class="py-5" style={{ backgroundColor: "#F8F9FB" }}>
                <div class="container">
                    
                    <Sections_Header
                        heading="Contact Us"
                        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />

                    <div class="row">
                        <Contact_Us_Cards />
                    </div>
                </div>
            </div >
        </>
    )
}
