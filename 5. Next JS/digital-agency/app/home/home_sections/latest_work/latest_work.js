import React from 'react'
import Latest_work_card from '../../(components)/latest_work_card/latest_work_card'

import work1 from '@/public/imgs/latest-work/latest-work (1).jpg'
import work2 from '@/public/imgs/latest-work/latest-work (2).png'
import work3 from '@/public/imgs/latest-work/latest-work (3).jpg'
import work4 from '@/public/imgs/latest-work/latest-work (4).jpg'
import work5 from '@/public/imgs/latest-work/latest-work (5).jpg'
import work6 from '@/public/imgs/latest-work/latest-work (6).jpg'

import Circle_btn from '@/app/(components)/circle_btn/circle_btn'
import { FaGreaterThan, FaLessThan } from "react-icons/fa"


export default function Latest_work() {
    return (
        <>
            <section className='py-6 sm:mb-9'>

                <div className='container mx-auto px-[5%] md:px-[10%]'>

                    <div>
                        <div className='text-center sm:text-start'>
                            <h3 className='text-[#2370C8] text-lg uppercase hover:underline underline-offset-4 transition-all inline cursor-default'>OUR PORTFOLIO</h3>
                        </div>
                        <div className='text-center sm:text-start'>
                            <h1 className='text-[#262A4E] text-md sm:text-3xl pt-1 sm:pt-2 font-bold'>Take A Look At Our Latest Work</h1>
                        </div>
                    </div>

                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 my-3 sm:my-6'>
                        <Latest_work_card imgSrc={work1} />
                        <Latest_work_card imgSrc={work2} />
                        <Latest_work_card imgSrc={work3} />
                        <Latest_work_card imgSrc={work4} />
                        <Latest_work_card imgSrc={work5} />
                        <Latest_work_card imgSrc={work6} />
                    </div>

                    <div className='flex justify-center'>
                        <Circle_btn style="bg-[#E0E0E0] p-4 hover:-translate-x-2 hover:scale-100 duration-500" btnIcon={FaLessThan} />
                        <Circle_btn style="bg-[#2370C8] p-4 hover:translate-x-2 hover:scale-100 duration-500 ms-4" btnIcon={FaGreaterThan} />
                    </div>

                </div>
            </section>
        </>
    )
}
