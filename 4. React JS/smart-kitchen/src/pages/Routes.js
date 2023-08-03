import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./home/Home"
import Alert from '../components/alert/Alert'
import Navbar from '../components/nabar/Navbar'
import Footer from '../components/footer/Footer'
import Contact from './contact/Contact'
import Menu from './menu/Menu'
export default function Index() {
    return (
        <BrowserRouter>

            <Navbar />

            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Menu' element={<Menu />} />
                    <Route path='/Contact' element={<Contact />} />
                </Routes>
            </main>

            <Footer />

        </BrowserRouter>
    )
}
