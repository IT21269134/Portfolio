import { workData } from "@/assets/assests";
import Image from "next/image";
import React from "react";
import { assets } from "./../../assets/assests";

const Work = ({ isDarkMode }) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">Working Experience</h2>

      <p className="text-center max-w-2xl mx-auto mt-50 mb-12 font-Ovo">
        I have worked with software development companies and IT services and
        consulting companies. I have a lot of experience in web development ,HR
        and SEO.
      </p>

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black ">
        {workData.map((project, index) =>
          <div
            key={index}
            className="border border-gray-400 px-8 py-6 rounded-lg hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <div>
              <h2 className="text-2xl font-Ovo text-gray-950 dark:text-white">
                {project.company}
              </h2>
              <p className="text-xl font-semibold dark:text-white ">
                {project.title}
              </p>
              <p className="text-sm text-zinc-400 dark:text-white/60">
                {project.date}
              </p>
              <br />
              <p className="text-sm text-gray-700 dark:text-white/50 ">
                {project.description}
              </p>
            </div>
            <div className="border rounded-full border-black w-10 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition mt-2 dark:border-white ">
              <a href={project.link} target="_blank" rel="noreferrer">
                <Image
                  src={isDarkMode ? assets.send_icon_dark : assets.send_icon}
                  alt="send Icon"
                  className="w-4"
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
