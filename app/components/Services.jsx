import { serviceData } from "@/assets/assests";
import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My services</h2>

      <p className="text-center max-w-2xl mx-auto mt-50 mb-12 font-Ovo">
        I offer a wide range of services to help you grow your business. I am a
        professional web developer and SEO strategist. I can help you with
        building a website, SEO, HR, and graphics.
      </p>

      <div className="grid grid-cols-auto  gap-6 my-10">
        {serviceData.map(({ icon, title, description }, index) =>
          <div
            key={index}
            className="border border-gray-400 px-8 py-6 rounded-lg hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image src={icon} alt="Icon" className="w-10" />
            <h3 className="text-lg  my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
