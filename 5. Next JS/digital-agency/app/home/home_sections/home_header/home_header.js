import Button from "@/app/(components)/button/button";

export default function Home_header() {
    return (
        <>
            <header className="bg-[#122E99] text-white">
                <div className="pt-[12%] pb-[12%] md:pt-[10%] md:pb-[15%] flex items-center">
                    <div className="container mx-auto px-[5%] lg:px-[10%]">
                        <div>
                            <h1 className="text-[30px] sm:text-[65px] font-bold md:leading-[70px]">Creative <br /> digital Agency</h1>
                        </div>

                        <div>
                            <p className="mt-5 text-[14px] sm:text-[23px]">Lorem ipsum dolor sit  adipisicing elit, <br /> Aspernatur fuga.</p>
                        </div>

                        <Button btnTitle="Learn More" />
                    </div>
                </div>
            </header>
        </>
    )
}
