import Image from "next/image";

export default function Professionals_card(props) {
    return (
        <>
            <div className='flex justify-center'>
                <div>
                    <Image src={props.imgSrc} className="hover:-translate-y-1 hover:scale-105 duration-300" width={300} height={50}/>
                    <div>
                        <div className="bg-[#F2F9FF] hover:bg-[#CFEAFF] transition-all shadow-lg shadow-slate-300 text-center w-[80%] py-2 cursor-default relative -right-7 md:-right-5 lg:-right-16 xl:-right-20 bottom-5">
                             <h1 className="text-[#262A4E] text-md font-bold">Caroline Harrison</h1>
                             <h1 className="text-xs">FOUNDER & NANAGER</h1>   
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
