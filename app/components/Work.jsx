import { workData } from "@/assets/assests";
import Image from "next/image";
import React from "react";
import { assets } from "./../../assets/assests";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">Working Experience</h2>

      <p className="text-center max-w-2xl mx-auto mt-50 mb-12 font-Ovo">
        I have worked with software development companies and IT services and
        consulting companies. I have a lot of experience in web development ,HR
        and SEO.
      </p>

      <div className="grid grid-cols-auto my-10 gap-5">
        {workData.map((project, index) =>
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="text-2xl font-Ovo">
                  {project.company}
                </h2>
                <p className="text-xl ">
                  {project.title}
                </p>
                <p className="text-md ">
                  {project.date}
                </p>
                <p className="text-sm ">
                  {project.description}
                </p>
              </div>
              <div>
                <Image src={assets.send_icon} alt="send Icon" className="w-5" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
