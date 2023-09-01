import Professionals_card from '../../(components)/professionals_card/professionals_card'

import pro1 from '@/public/imgs/professionals/professional (1).jpg'
import pro2 from '@/public/imgs/professionals/professional (2).jpg'
import pro3 from '@/public/imgs/professionals/professional (3).jpg'

export default function Professionals() {
    return (
        <>
            <section className='py-10 sm:mb-32 bg-[#F2F9FF]'>

                <div className='container mx-auto px-[5%] md:px-[10%]'>

                    <div className='text-center'>
                        <h3 className='text-[#2370C8] text-lg uppercase hover:underline underline-offset-4 transition-all inline cursor-default'>OUR TEAM</h3>
                        <p className='text-[#262A4E] text-sm sm:text-3xl pt-1 sm:pt-2 font-bold'>Our top dedicated professionals.</p>
                    </div>

                    <div className='grid md:grid-cols-3  gap-5 my-8'>
                        <Professionals_card imgSrc={pro1} />
                        <Professionals_card imgSrc={pro2} />
                        <Professionals_card imgSrc={pro3} />
                    </div>

                </div>
            </section>
        </>
    )
}
