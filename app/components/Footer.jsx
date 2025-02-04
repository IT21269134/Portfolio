import { assets } from "@/assets/assests";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_icon : assets.logo_icon_dark}
          alt="logo"
          className="w-24 mx-auto mb-2 rounded"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode? assets.mail_icon_dark : assets.mail_icon}
            alt="logo"
            className="w-4"
          />
          harini.sliit@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Harini Chamathka. All right reseved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/IT21269134">
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/harini-chamathka-kumbukgolla/"
            >
              LinkeIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
