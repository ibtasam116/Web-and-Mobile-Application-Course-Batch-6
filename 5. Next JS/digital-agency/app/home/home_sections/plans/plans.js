import React from 'react'
import Plans_card from '../../(components)/plans_card/plans_card'

export default function Plans() {
    return (
        <>
            <section>
                <div className='container mx-auto px-[5%] md:px-[10%] my-5 sm:my-0'>
                    <div className='grid grid-cols-2 md:grid-cols-4'>
                        <div className='col-span-3'>
                            <h3 className='text-[#2370C8] text-md'>OUR PRICING</h3>
                            <h1 className='text-[#262A4E] text-xl sm:text-3xl mt-3 font-bold'>Choose A Plan That’s Right For You</h1>
                        </div>
                        <div className='flex items-center justify-center sm:justify-end'>
                            <span className='text-[#2370C8]'>Monthly</span>
                            <svg className='mx-3' xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="0 0 60 40" fill="none">
                                <rect x="8" y="8" width="52" height="23" rx="10" fill="#2370C8" />
                                <g filter="url(#filter0_d_173_191)">
                                    <circle cx="20" cy="19" r="13" fill="white" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_173_191" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="3.5" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.42 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_173_191" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_173_191" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                            <span className='text-[#262A4E]'>Yearly</span>
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-5 my-8'>
                        <Plans_card price="50" />
                        <Plans_card price="99" />
                        <Plans_card price="150" />
                    </div>

                </div>
            </section>
        </>
    )
}
