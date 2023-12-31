"use client"

import Image from 'next/image'


import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import reviewsImage from '../../../public/images/reviews.png'
import profile from '../../../public/images/profile-images/Profile.png'
import profile1 from '../../../public/images/profile-images/Profile1.png'
import ClientData from '@/app/(components)/clientData/clientData';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Client = ({ next, previous, goToSlide, ...rest }) => {


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <>
            <section className="max-w-[100%]  mx-auto w-full">

                <div className="h-full md:my-28">

                    <div className="grid md:grid-cols-2 gap-5">

                        <div className='hidden md:block'>
                            <Image src={reviewsImage} alt="" className="w-full h-full md:rounded-r-[10%]" />
                        </div>

                        <div className='w-64 sm:w-96 md:w-full mx-auto px-3 sm:px-10 lg:px-20 md:py-20'>

                            <Carousel

                                arrows={false}
                                swipeable={true}
                                draggable={true}
                                showDots={false}
                                responsive={responsive}
                                // ssr={true} // means to render carousel on server-side.
                                // infinite={true}
                                // autoPlay={false}
                                // autoPlaySpeed={1000}
                                // keyBoardControl={true}
                                // customTransition="all .5"
                                // transitionDuration={500}
                                // containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                            // deviceType={this.props.deviceType}
                            // dotListClass="custom-dot-list-style"
                            // itemClass="carousel-item-padding-40-px"
                            >

                                <div>
                                    <ClientData
                                        heading="What do they think"
                                        profile={profile}
                                        name="Samantha Sench"
                                        edu="Student at University"
                                        description="“ Hi, it’s Samantha. After using it made me a lot of benefits, starting with convenience of setting a deadline of tasks and schedule after that the app is very simple using. “" />
                                </div>

                                <div>
                                    <ClientData
                                        heading="What do they think"
                                        profile={profile1}
                                        name="Muhammad IbTaSaM"
                                        edu="Student at University"
                                        description="“ Hi, it’s Muhammad IbTaSaM. Computer Scientist: Fast learner, goal-oriented and focusing on my problem-solving skills. Love to build projects to improve my skillset. “" />
                                </div>

                            </Carousel>

                            <div className='mt-2 md:mt-8 text-[#2D76F9] text-center md:text-start'>

                                <div className='text-3xl cursor-pointer inline-block md:ms-4'>
                                    <BsArrowLeft className='hover:-translate-x-2 saturate-150 duration-700' />
                                </div>

                                <div className='text-3xl cursor-pointer inline-block ms-6'>
                                    <BsArrowRight className='hover:translate-x-2 saturate-150 duration-700' />
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section >


        </>
    )
}
export default Client





