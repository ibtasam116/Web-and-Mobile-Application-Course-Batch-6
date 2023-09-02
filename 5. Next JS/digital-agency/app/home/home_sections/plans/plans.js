import Plans_card from '../../(components)/plan_card/plans_card'

import plan1 from "@/public/imgs/plan/plan (1).jpg"
import plan2 from "@/public/imgs/plan/plan (2).jpg"
import plan3 from "@/public/imgs/plan/plan (3).jpg"

export default function Plans() {
    return (
        <>
            <section className='py-10 sm:mb-32'>

                <div className='container mx-auto px-[5%] md:px-[10%]'>
                  
                   <div className='grid grid-cols-2 md:grid-cols-12'>
                       
                        <div className='col-span-12 md:col-span-9 text-center md:text-start'>
                            <h3 className='text-[#2370C8] text-lg uppercase hover:underline underline-offset-4 transition-all inline cursor-default'>OUR PRICING</h3>
                            <h1 className='text-[#262A4E] text-sm sm:text-2xl lg:text-3xl pt-1 sm:pt-2 font-bold'>Choose A Plan That’s Right For You</h1>
                        </div>

                        <div className='col-span-12 md:col-span-3 flex items-center justify-center md:justify-end mt-3 md:mt-0'>

                            <span class="text-sm font-bold text-[#2370C8]">Monthly</span>
                            <label class="relative inline-flex items-center cursor-pointer mx-3">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div class="w-11 h-6 bg-gray-200 rounded-full dark:bg-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                            <span class="text-sm font-bold text-[#262A4E]">Yearly</span>

                        </div>

                    </div>

                    <div className='grid md:grid-cols-3  gap-5 my-8'>
                        <Plans_card imgSrc={plan1} price="50" />
                        <Plans_card imgSrc={plan2} price="99" />
                        <Plans_card imgSrc={plan3} price="150" />
                    </div>

                </div>
            </section>
        </>
    )
}
