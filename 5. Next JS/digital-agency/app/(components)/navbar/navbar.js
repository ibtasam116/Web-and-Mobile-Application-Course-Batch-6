import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="h-[12vh] bg-[#122E99] text-white">
                <div className="container mx-auto px-[5%] lg:px-[10%] py-[15px] flex justify-between items-center">


                    <div>
                        <h3><a href="#" className="uppercase text-3xl font-bold hover:text-sky-500 transition-all delay-100">Logo.</a></h3>
                    </div>

                    <div className=" w-[100%] lg:w-[60%] px-[50px] hidden md:block">
                        <ul className="uppercase flex justify-between text-xs lg:text-sm">
                            <li><Link href="/" className="hover:text-sky-500 hover:underline transition-all delay-100 hover:font-bold">Home</Link></li>
                            <li><Link href="/about" className="hover:text-sky-500 hover:underline transition-all delay-100 hover:font-bold">About</Link></li>
                            <li><Link href="" className="hover:text-sky-500 hover:underline transition-all delay-100 hover:font-bold">Pages</Link></li>
                            <li><Link href="" className="hover:text-sky-500 hover:underline transition-all delay-100 hover:font-bold">Services</Link></li>
                            <li><Link href="" className="hover:text-sky-500 hover:underline transition-all delay-100 hover:font-bold">Portfolio</Link></li>
                            <li><Link href="" className="hover:text-sky-500 hover:underline transition-all delay-100 hover:font-bold">Blog</Link></li>
                            <li><Link href="" className="hover:text-sky-500 hover:underline transition-all delay-100 hover:font-bold">Contact</Link></li>
                        </ul>
                    </div>

                    <form class="flex items-center hidden md:block">
                        <div class="relative w-full">
                            <input type="text" id="voice-search" class="bg-gray-50 border border-blue-00 text-[#122E99] text-sm rounded-[50px] focus:ring-blue-900 focus:border-blue-500 block w-full pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 placeholder-[#122E99] outline-none dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                            <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </nav>
        </>
    )
}
