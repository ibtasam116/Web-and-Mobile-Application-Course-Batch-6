import Button from '@/app/(components)/button/button'
import Image from 'next/image'
import React from 'react'

export default function Plans_card(props) {
    return (
        <>
            <div className='flex justify-center'>
                <div className={`bg-[#E7E7E7] w-72 md:w-full max-h-[130vh] hover:bg-[#2370C8] hover:shadow-2xl hover:text-white transition-all flex flex-col justify-center items-center pt-5 pb-2`}>

                    <h2 className='text-xl font-bold'>Basic Plan</h2>
                    <div className='py-5'>
                        <Image src={props.imgSrc} className='rounded-full' width={100} height={100}/>
                    </div>
                    <div>
                        <h2>
                            <span className='text-2xl font-bold'>${props.price}</span>
                            <sub className='text-md'>/Month</sub>
                        </h2>
                    </div>
                    <div className='text-center text-sm leading-7 mt-3'>
                        Graphic Design <br />
                        Web Design <br />
                        UI/UX <br />
                        HTML/CSS <br />
                        SEO Marketing <br />
                        Business Analysis
                    </div>
                    <Button btnTitle="Start Now" style="border-2 border-[#E7E7E7] my-3 text-md hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-100 duration-500" />
                </div>
            </div>
        </>
    )
}
















{/* <svg xmlns="http://www.w3.org/2000/svg" width="91" height="87" viewBox="0 0 91 87" fill="none">
                            <circle cx="43.2071" cy="43.2071" r="43.2071" fill="#D6EDFF" />
                            <circle cx="43.5" cy="5.5" r="3.1" stroke="#4A8EDD" stroke-width="0.8" />
                            <circle cx="76.5" cy="79.5" r="3.1" stroke="#4A8EDD" stroke-width="0.8" />
                            <circle cx="79" cy="11" r="2" fill="#3F8CE3" />
                            <line x1="42.888" y1="75.3931" x2="42.888" y2="81.6131" stroke="#3782D7" stroke-width="0.8" />
                            <line x1="46.2201" y1="78.2809" x2="40" y2="78.2809" stroke="#3782D7" stroke-width="0.8" />
                            <line x1="85.7119" y1="19.8372" x2="90.0425" y2="25.1878" stroke="#3782D7" stroke-width="0.8" />
                            <line x1="90.2828" y1="19.6403" x2="85.4155" y2="24.5076" stroke="#3782D7" stroke-width="0.8" />
                        </svg> */}