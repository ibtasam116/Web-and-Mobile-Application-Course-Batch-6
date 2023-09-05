import Link from "next/link";
import { FaSearch } from "react-icons/fa";
// import { AiOutlineMenu } from "react-icons/Ai";

export default function Navbar() {
    return (
        <>


            <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                            </li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                                <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <nav className="max-h-[100vh] bg-[#122E99] text-white">
                <div className="container mx-auto px-[5%] md:px-[10%] py-3">

                    <div className="grid grid-cols-12">

                        <div className="col-span-1">
                            <h3>
                                <Link href="/" className="uppercase text-xl sm:text-3xl font-bold hover:text-sky-500 transition-all delay-100">Logo.</Link>
                            </h3>
                            {/* <span className="absolute right-5 top-4 sm:top-3 inline lg:hidden hover:text-sky-500">
                                <a href="">
                                    <AiOutlineMenu className="text-xl sm:text-3xl sm:me-14" />
                                </a>
                            </span> */}
                        </div>

                        <div className="col-span-9 hidden lg:block">
                            <ul className="flex justify-around py-3 ms-32 me-20 text-xs uppercase ">
                                <li><Link href="/" className="hover:text-sky-500 hover:underline transition-all delay-100">Home</Link></li>
                                <li><Link href="/about" className="hover:text-sky-500 hover:underline transition-all delay-100">About</Link></li>
                                <li><Link href="/pages" className="hover:text-sky-500 hover:underline transition-all delay-100">Pages</Link></li>
                                <li><Link href="/services" className="hover:text-sky-500 hover:underline transition-all delay-100">Services</Link></li>
                                <li><Link href="/portfolio" className="hover:text-sky-500 hover:underline transition-all delay-100">Portfolio</Link></li>
                                <li><Link href="/blog" className="hover:text-sky-500 hover:underline transition-all delay-100">Blog</Link></li>
                                <li><Link href="/contact" className="hover:text-sky-500 hover:underline transition-all delay-100">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="col-span-2 hidden lg:block">
                            <form class="flex items-center">
                                <div class="relative w-full">
                                    <input type="text" id="voice-search" class="bg-gray-50 border border-blue-00 text-[#122E99] text-sm rounded-[50px] focus:ring-blue-900 focus:border-blue-500 block w-full pl-4 p-2.5 placeholder-[#122E99] placeholder:bold  outline-none " placeholder="Search" required />
                                    <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <FaSearch className="text-[#2370C8] hover:text-sky-500" />
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </nav>
        </>
    )
}
