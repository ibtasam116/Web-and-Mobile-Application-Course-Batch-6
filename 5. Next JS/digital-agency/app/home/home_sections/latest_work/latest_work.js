import React from 'react'
import Latest_work_card from '../../(components)/latest_work_card/latest_work_card'
import Circle_btn from '@/app/(components)/circle_btn/circle_btn'
import { FaGreaterThan, FaLessThan } from "react-icons/fa"


export default function Latest_work() {
    return (
        <>
            <section className='py-5 sm:mb-9'>
                <div className='container mx-auto px-[5%] md:px-[10%]'>
                    <div>
                        <h3 className='text-[#2370C8] text-md'>OUR PORTFOLIO</h3>
                        <h1 className='text-[#262A4E] text-xl sm:text-3xl mt-3 font-bold'>Take A Look At Our Latest Work</h1>
                    </div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-5 my-8'>
                        <Latest_work_card />
                        <Latest_work_card title="Web Development" />
                        <Latest_work_card />
                        <Latest_work_card />
                        <Latest_work_card />
                        <Latest_work_card />
                    </div>
                    <div className='flex justify-center'>
                        <Circle_btn bgColor="bg-[#898989]" btnIcon={FaGreaterThan} />
                        <Circle_btn bgColor="bg-[#2370C8]" btnIcon={FaLessThan} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </section>
        </>
    )
}
