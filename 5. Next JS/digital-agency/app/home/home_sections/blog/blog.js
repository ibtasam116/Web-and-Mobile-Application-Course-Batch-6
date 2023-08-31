import Button from "@/app/(components)/button/button";
import Blog_card from "../../(components)/blog_card/blog_card";

export default function blog() {
    return (
        <>
            <section className='max-h-[1005] py-14 flex'>
                <div className='container mx-auto px-[5%] md:px-[10%]'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        <div className="flex items-center">
                            <div>
                                <h3 className='text-[#2370C8]'>OUR BLOG</h3>
                                <h1 className='font-bold text-[30px]'>Letest News & Blog</h1>
                                <p className='text-[13px] my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    sed do eiusmod tempor incididunt labo. </p>
                                <div className='flex max-w-[100%]'>
                                    <input className='w-44 sm:w-full border-2 border-[#2370C8] outline-none px-3 py-1' type="text" name="" id="" placeholder='Enter Your Email' />
                                    <div className='w-12 h-9 bg-[#2370C8] text-white flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                                            <path d="M17.5303 6.53033C17.8232 6.23744 17.8232 5.76256 17.5303 5.46967L12.7574 0.696699C12.4645 0.403806 11.9896 0.403806 11.6967 0.696699C11.4038 0.989593 11.4038 1.46447 11.6967 1.75736L15.9393 6L11.6967 10.2426C11.4038 10.5355 11.4038 11.0104 11.6967 11.3033C11.9896 11.5962 12.4645 11.5962 12.7574 11.3033L17.5303 6.53033ZM0 6.75H17V5.25H0V6.75Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Blog_card
                            title="Maecenas laoree efficiture sagittis aliquam eleifend nisl."
                            date="Posted 7 MArch, 2020"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing
                            sed do eiusmod tempor incididunt labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident,"
                        />

                        <Blog_card
                            title="Maecenas laoree efficiture sagittis aliquam eleifend nisl."
                            date="Posted 7 MArch, 2020"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing
                            sed do eiusmod tempor incididunt labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident,"
                        />

                    </div>

                </div>
                {/* <div className="">
                <Button />
                </div> */}

            </section>
        </>
    )
}
