"use client";

import Image from "next/image";
import { imagePath } from "@/utils/imagePath";

const Cook = () => {
  return (
    <section className="relative" id="aboutus">
      <div className="container px-4">
        {/* <div className='absolute right-0 bottom-[-18%] xl:block hidden'>
          <Image
            src='{`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/Cook/burger.webp'
            alt='burger-image'
            width={463}
            height={622}
          />
        </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5">
          <div className="lg:col-span-6 flex lg:justify-start justify-center">
            <Image
              src={imagePath("/images/Logo/Logo-kedaig23.svg")}
              alt="nothing"
              width={636}
              height={808}
            />
          </div>
          <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start">
            <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase lg:text-start text-center">
              About Us
            </p>
            <h2 className="lg:text-start text-center">
              Crafted with Passion, Served with Pride
            </h2>
            <p className="text-black/50 text-lg font-normal my-5 text-start">
              VISION <br /> Introducing and developing Indonesian cuisine to the
              international market by prioritizing halal and quality aspects.
            </p>
            <p className="text-black/50 text-lg font-normal mb-10 text-start">
              MISSION <br /> Produce ready-to-eat dishes that can be enjoyed by
              anyone, anytime, and anywhere, both children, the elderly,
              including today&apos;s young generation, as well as urban people.
              Package traditional Indonesian food products in a modern way with
              sterilization technology therefore they would have a long product
              shelf life, enable them to be marketed more widely to the
              international market. Market high-quality and halal-guaranteed
              food products.
            </p>
            <button className="text-xl font-medium rounded-full text-white py-3 px-8 duration-300 bg-primary w-fit border border-primary hover:bg-transparent hover:text-primary hover:cursor-pointer">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cook;
