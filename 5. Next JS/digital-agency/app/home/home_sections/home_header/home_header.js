import Button from "@/app/(components)/button/button";
import Link from "next/link";

export default function Home_header() {
    return (
        <>
            <header className="max-h-[100vh] py-5 sm:py-20 lg:py-28 bg-[#122E99] text-white">
                <div className="container mx-auto px-[5%] md:px-[10%]">

                    <div>
                        <h1 className="text-4xl sm:text-[65px] font-bold sm:leading-[70px] animate-pulse">Creative <br /> digital Agency</h1>
                    </div>

                    <div>
                        <p className="mt-5 text-sm sm:text-xl">Lorem ipsum dolor sit  adipisicing elit, <br /> Aspernatur fuga.</p>
                    </div>

                    <Link href="/pages">
                        <Button btnTitle="Learn More" style="bg-[#2370C8] hover:bg-sky-700 my-5 text-md text-white hover:translate-x-2 hover:scale-100 duration-500" />
                    </Link>

                </div>
            </header>
        </>
    )
}
