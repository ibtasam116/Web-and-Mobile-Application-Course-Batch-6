import Circle_btn from "@/app/(components)/circle_btn/circle_btn";

import { FaGreaterThan, FaLessThan } from "react-icons/fa"
import Digital_services_card from "../../(components)/digital_services_card/digital_services_card";
import web from '@/public/imgs/digital-services/web-development.jpeg'
import graph from '@/public/imgs/digital-services/graphic-design.png'
import mark from '@/public/imgs/digital-services/digital-marketing.jpeg'

export default function Digital_services() {
  return (
    <>
      <section className='py-9 md:py-32'>

        <div className="container mx-auto px-[5%] md:px-[10%]">

          <div className='text-center'>
            <h3 className='text-lg text-[#2370C8] uppercase hover:underline underline-offset-4 transition-all inline cursor-default'>Our Serices</h3>
          </div>

          <div className='grid sm:grid-cols-12 py-3 md:py-4'>

            <div className="col-span-12 md:col-span-9 flex justify-center items-center md:ms-40 lg:ms-56 xl:ms-60">
              <p className='text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold'>We Are Providing Digital services</p>
            </div>

            <div className="col-span-12 md:col-span-3">

              <div className=" flex justify-center md:justify-end pt-3 md:pt-0">
                <Circle_btn style="bg-[#E0E0E0] p-3 hover:-translate-x-2 hover:scale-100 duration-500 animate-pulse" btnIcon={FaLessThan} />
                <Circle_btn style="bg-[#2370C8] p-3 hover:translate-x-2 hover:scale-100 duration-500 ms-4 animate-pulse" btnIcon={FaGreaterThan} />
              </div>

            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            <Digital_services_card
              imgSrc={web}
              title="Web Development"
              description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmodtempor
                    incididunt ut labore et dolore"/>

            <Digital_services_card
              imgSrc={graph}
              title="Graphic Design"
              description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmodtempor
                    incididunt ut labore et dolore"/>

            <Digital_services_card
              imgSrc={mark}
              title="Digital Marketing"
              description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmodtempor
                    incididunt ut labore et dolore"/>

          </div>
        </div>
      </section>
    </>
  )
}
