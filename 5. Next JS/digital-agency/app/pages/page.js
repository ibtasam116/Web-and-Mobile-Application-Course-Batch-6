import React from 'react'
import Header from '../(components)/header/header'
import Home_ideas from '../home/home_sections/home_ideas/home_ideas'
import Professionals from '../home/home_sections/professionals/professionals'

export default function Page() {
    return (
        <>
            <Header header_title="Pages" />
            <Professionals/>
            <Home_ideas />
        </>
    )
}
