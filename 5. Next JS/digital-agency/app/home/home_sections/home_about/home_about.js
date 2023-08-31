import Button from '@/app/(components)/button/button'
import Image from 'next/image'

import img from '@/public/imgs/about-us.jpg'

export default function Home_about() {
    return (
        <>
            <section className='pb-[15%] flex items-center'>
                <div className='container mx-auto px-[5%] md:px-[10%]'>
                    <div className='grid lg:grid-cols-2 gap-10'>

                        <div className='hidden md:block'>
                            <Image src={img} className='rounded-3xl' width={500} height={500}/>
                        </div>

                        <div className='card lg:py-5'>
                            <h3 className='text-[#2370C8] hidden md:inline'>ABOUT US</h3>
                            <p className='text-[#262A4E] font-bold text-2xl sm:text-4xl md:text-[38px] py-4'>We design, build brands
                                & digital projects.</p>
                            <p className='text-xs sm:text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit
                                <br /><br />
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident,</p>
                            <Button btnTitle="Read More" />
                        </div>

                        <div className='block md:hidden'>
                            <Image src={img} className='rounded-3xl' width={500} height={500}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
