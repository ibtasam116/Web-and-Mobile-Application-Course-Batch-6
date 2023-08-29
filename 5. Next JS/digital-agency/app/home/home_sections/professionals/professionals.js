import React from 'react'
import Professionals_card from '../../(components)/professionals_card/professionals_card'

export default function Professionals() {
    return (
        <>
            <section className='py-10 sm:mb-32 bg-[#F2F9FF]'>
                <div className='container mx-auto px-[5%] md:px-[10%]'>
                    <div className='text-center'>
                        <h3 className='text-[#2370C8]'>OUR TEAM</h3>
                        <p className='text-[#262A4E] text-sm sm:text-xl md:text-2xl font-bold'>Our top dedicated professionals.</p>
                    </div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-5 my-8'>
                        <Professionals_card />
                        <Professionals_card />
                        <Professionals_card dis="block sm:hidden md:block"/>
                    </div>

                </div>
            </section>
        </>
    )
}
