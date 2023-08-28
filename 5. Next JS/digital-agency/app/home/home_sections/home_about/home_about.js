import Button from '@/app/(components)/button/button'
import React from 'react'

export default function Home_about() {
    return (
        <>
            <section className='h-[100vh] flex items-center'>
                <div className='container mx-auto px-[10%]'>
                    <div className='grid grid-cols-2 gap-10'>
                        <div className='card py-[35%] bg-[#E7E7E7]'>
                        </div>
                        <div className='card'>
                            <h3>ABOUT US</h3>
                            <p>We design, build brands
                                & digital projects.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit

                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident,</p>
                            <Button btnTitle="Read More"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
