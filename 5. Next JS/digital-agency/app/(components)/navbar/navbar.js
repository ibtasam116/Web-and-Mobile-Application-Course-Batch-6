import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/Ai";

export default function Navbar() {
    return (
        <>
            <nav className="max-h-[100vh] bg-[#122E99] text-white">
                <div className="container mx-auto px-[5%] md:px-[10%] py-3">

                    <div className="grid grid-cols-12">

                        <div className="col-span-1">
                            <h3>
                                <Link href="/" className="uppercase text-xl sm:text-3xl font-bold hover:text-sky-500 transition-all delay-100">Logo.</Link>
                            </h3>
                            <span className="absolute right-5 top-4 sm:top-3 inline lg:hidden hover:text-sky-500">
                                <a href="">
                                    <AiOutlineMenu className="text-xl sm:text-3xl sm:me-14" />
                                </a>
                            </span>
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
