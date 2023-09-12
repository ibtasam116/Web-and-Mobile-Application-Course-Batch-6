import React from 'react'
import Footer_card from './(components)/footer_card/footer_card'

export default function Footer() {

    const now = new Date();
    const year = now.getFullYear();

    return (
        <>
            <section className='max-h-[100%] bg-[#F2F9FF] border-b-2 border-[#7AB8FF]'>
                <div className='container mx-auto px-[5%] md:px-[10%] py-7 sm:py-14'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5'>
                        <div className='md:col-span-2'>
                            <h1 className='text-2xl text-[#2370C8] font-bold'>LOGO.</h1>
                            <p className='text-xs w-[80%] mt-3 leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing
                                sed do eiusmod tempor incididunt labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ea commodo consequat.</p>
                        </div>

                        <Footer_card
                            color="text-[#2370C8]"
                            title="Our Links"
                            link1="Home"
                            link2="About Us"
                            link3="Services"
                            link4="Team"
                            link5="Blog" />

                        <Footer_card
                            title="Our Company"
                            link1="About Company"
                            link2="Our Testimonials"
                            link3="Latest News"
                            link4="Our misson"
                            link5="Get a free Quot" />

                        <Footer_card
                            title="Our Services"
                            link1="App Development"
                            link2="Web Development"
                            link3="Graphic Design"
                            link4="Web Solution"
                            link5="App Design" />

                    </div>
                    <div className='flex items-center justify-center sm:justify-start mt-5'>

                        <div className='w-8 h-8 border-2 border-[#2370C8] hover:bg-[#2370C8] transition-all rounded-full'>
                        </div>

                        <div className='w-8 h-8 border-2 border-[#2370C8] hover:bg-[#2370C8] transition-all rounded-full mx-3'>
                        </div>

                        <div className='w-8 h-8 border-2 border-[#2370C8] hover:bg-[#2370C8] transition-all rounded-full'>
                        </div>

                    </div>
                </div>
            </section>
            <footer className='bg-[#F2F9FF]'>
                <p className='py-3 text-center font-xs text-[#4b4b4b80]'>
                    &copy; Copyright {year} <span className='text-[#2370c880]'>Brandoxide.</span> <span className='block sm:inline'>All rights reserved.</span>
                </p>
            </footer>
        </>
    )
}
