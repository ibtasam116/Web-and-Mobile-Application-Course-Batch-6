import Circle_btn from "@/app/(components)/circle_btn/circle_btn";

import { FaGreaterThan, FaLessThan } from "react-icons/fa"
import Digital_services_card from "../../(components)/digital_services_card/digital_services_card";


export default function Digital_services() {
  return (
    <>
      <section className='pt-[10%] pb-[3%] md:pb-[15%]'>

        <div className='flex justify-center'>
          <h3 className='text-xl text-[#2370C8] uppercase'>Our Serices</h3>
        </div>

        <div className='text-center'>
          <div className="">
            <p className='font-bold text-md sm:text-xl md:text-3xl mt-3'>We Are Providing Digital services</p>
            {/* <div className="absolute right-[30%] bottom-[-30%] md:right-[41%] md:bottom-[-37%] lg:right-[13%] lg:bottom-[-23%]">
              <Circle_btn bgColor="bg-[#898989]" btnIcon={FaGreaterThan} />
              <Circle_btn bgColor="bg-[#2370C8]" btnIcon={FaLessThan} />
            </div> */}
          </div>
        </div>

        <div className="container mx-auto px-[5%] sm:px-[10%] mt-10 md:mt-16">
          <div className="grid md:grid-cols-3 gap-5">

            <Digital_services_card
              borderColor="border-[#2370C8]"
              title="Web Development"
              description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmodtempor
                    incididunt ut labore et dolore"/>

            <Digital_services_card
              borderColor="border-[#CFEAFF]"
              bgColor="bg-[#CFEAFF]" title="Graphic Design"
              description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmodtempor
                    incididunt ut labore et dolore"/>

            <Digital_services_card
              borderColor="border-[#CFEAFF]"
              bgColor="bg-[#CFEAFF]" title="Digital Marketing"
              description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmodtempor
                    incididunt ut labore et dolore"/>

          </div>
        </div>
      </section>
    </>
  )
}
