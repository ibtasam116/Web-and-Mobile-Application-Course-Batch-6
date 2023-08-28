import React from 'react'
import Home_ideas_card from '../../(components)/home_ideas_card/home_ideas_card'

export default function Home_ideas() {
    return (
        <>
            <section className='py-8 sm:mb-32 bg-[#F2F9FF]'>
                <div className='container mx-auto px-[5%] md:px-[10%]'>
                    <div className='grid sm:grid-cols-3 text-center border-2 border-[#FFF]'>
                        
                        <Home_ideas_card
                            title="Smart planing"
                            description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore" />

                        <Home_ideas_card
                            title="Our partnership"
                            description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore" />

                        <Home_ideas_card
                            title="Super ideas"
                            description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore" />

                    </div>
                </div>
            </section>
        </>
    )
}
