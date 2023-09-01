import Home_ideas_card from '../../(components)/home_ideas_card/home_ideas_card'

import smart from '@/public/imgs/home-ideas/smart-planing.jpg'
import partner from '@/public/imgs/home-ideas/partnership.jpeg'
import idea from '@/public/imgs/home-ideas/super-ideas.png'

export default function Home_ideas() {
    return (
        <>
            <section className='py-8 sm:mb-32 bg-[#F2F9FF]'>

                <div className='container mx-auto px-[5%] md:px-[10%]'>

                    <div className='grid sm:grid-cols-3 gap-3 py-3 px-1 text-center border-4 border-[#FFF]'>

                        <Home_ideas_card
                            imgSrc={smart}
                            title="Smart planing"
                            description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore" />

                        <Home_ideas_card
                            imgSrc={partner}
                            title="Our partnership"
                            description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore" />

                        <Home_ideas_card
                            imgSrc={idea}
                            title="Super ideas"
                            description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore" />

                    </div>
                </div>
            </section>
        </>
    )
}
