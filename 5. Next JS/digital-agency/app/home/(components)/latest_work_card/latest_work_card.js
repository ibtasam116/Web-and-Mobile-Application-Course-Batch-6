import Image from 'next/image'
import React from 'react'

export default function Latest_work_card(props) {
    return (
        <>
            <div className='flex justify-center'>
                <div className=''>
                    <Image src={props.imgSrc} className='hover:-translate-y-1 hover:scale-90 duration-500' width={500} height={500} />

                </div>
            </div>
        </>
    )
}
