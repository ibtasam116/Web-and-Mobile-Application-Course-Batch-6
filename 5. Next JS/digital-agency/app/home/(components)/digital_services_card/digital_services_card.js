import Image from "next/image";

export default function Digital_services_card(props) {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-[90%] sm:w-[60%] md:w-full mx-auto py-9 text-center border border-[#2370C8] hover:border-[#E5F3FE] hover:bg-[#E5F3FE] transition-all">

                <Image src={props.imgSrc} width={100} height={100} className="rounded-full" />
                <h1 className="font-bold text-sm py-3">{props.title}</h1>
                <p className="px-5 sm:px-1 text-sm">{props.description}</p>

            </div>
        </>
    )
}




{/* <svg xmlns="http://www.w3.org/2000/svg" width="81" height="79" viewBox="0 0 81 79" fill="none">
                    <circle cx="39.5" cy="39.5" r="39.5" fill="#D6EDFF" />
                    <circle cx="11" cy="5" r="2.6" stroke="#4A8EDD" stroke-width="0.8" />
                    <circle cx="70" cy="72" r="2.6" stroke="#4A8EDD" stroke-width="0.8" />
                    <circle cx="71.5" cy="11.5" r="1.5" fill="#3F8CE3" />
                    <line x1="10.4" y1="69" x2="10.4" y2="74" stroke="#3782D7" stroke-width="0.8" />
                    <line x1="13" y1="71.4" x2="8" y2="71.4" stroke="#3782D7" stroke-width="0.8" />
                    <line x1="76.5059" y1="18.2798" x2="79.6515" y2="22.1664" stroke="#3782D7" stroke-width="0.8" />
                    <line x1="79.8184" y1="18.2828" x2="76.2828" y2="21.8184" stroke="#3782D7" stroke-width="0.8" />
                </svg> */}