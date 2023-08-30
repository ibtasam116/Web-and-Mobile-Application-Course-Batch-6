
import imgCli from '@/public//imgs/clients/client.png'
import Client_card from '../../(components)/client_card/client_card'

export default function Clients() {
    return (
        <>
            <section className='max-h-[100#] bg-[#3782d7e6] py-8 sm:py-24'>
                <div className='container mx-auto px-[5%] md:px-[10%] text-white'>

                    <h1 className='text-xl sm:text-4xl font-bold text-center mb-8 sm:mt-8'>We’re trusted by clients.</h1>

                    <div className='grid sm:grid-cols-2 gap-8'>
                        <Client_card imgSrc={imgCli} title="Mina Whatson" subTitle="CONSULTANT" />
                        <Client_card imgSrc={imgCli} title="Edward Hunter" subTitle="IT SPCIALIST" />
                    </div>
                </div>
            </section>
        </>
    )
}
