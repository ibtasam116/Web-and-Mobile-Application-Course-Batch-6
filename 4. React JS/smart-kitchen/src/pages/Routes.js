import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./home/Home"
import Contact from './contact/Contact'
import Menu from './menu/Menu'

export default function Index() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Menu' element={<Menu />} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>

        </BrowserRouter>
    )
}
