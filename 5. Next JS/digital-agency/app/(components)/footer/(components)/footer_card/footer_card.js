import React from 'react'

export default function Footer_card(props) {
    return (
        <>
            <div className='flex md:justify-end'>
                <ul>
                    <h1 className='font-bold'>{props.title}</h1>
                    <li className='my-1 text-[#2370C8]'><a href="">{props.link1}</a></li>
                    <li className='my-1'><a href="">{props.link2}</a></li>
                    <li className='my-1'><a href="">{props.link3}</a></li>
                    <li className='my-1'><a href="">{props.link4}</a></li>
                    <li className='my-1'><a href="">{props.link5}</a></li>
                </ul>
            </div>
        </>
    )
}
