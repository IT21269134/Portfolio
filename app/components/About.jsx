import { assets, infoList, toolData } from "@/assets/assests";
import React from "react";
import Image from "next/image";

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-10">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I am a passionate web developer with a strong interest and have
            experience in web applications using modern technologies. I am a
            quick learner and a team player who can work well for the
            organizational growth.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
            {infoList.map(({ icon, icon_dark, title, description }, index) =>
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-5 cursor-pointer hover:bg-lightHover  hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image
                  src={isDarkMode ? icon_dark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:white/80">
                  {description}
                </p>
              </li>
            )}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo">
            Tools I use
            <ul className="flex items-center gap-3 sm:gap-5">
              {toolData.map((tool, index) =>
                <li
                  key={index}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border bptder-gray-400 rounded-lg cursor-pointer  hover:-translate-y-1 duration-500 "
                >
                  <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                </li>
              )}
            </ul>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
