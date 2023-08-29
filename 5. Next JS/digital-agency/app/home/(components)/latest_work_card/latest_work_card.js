import React from 'react'

export default function Latest_work_card(props) {
    return (
        <>
        <div className='flex justify-center'>
            <div className='bg-[#E7E7E7] w-60 sm:w-full h-52 md:h-44 lg:h-64 hover:shadow-2xl transition-all flex items-end justify-center text-white text-xl font-bold'>{props.title}</div>
        </div>
        </>
    )
}
