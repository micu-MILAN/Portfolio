import React from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoYoutube,
} from "react-icons/io5";
import { BiCopyright } from "react-icons/bi";

function Footer() {
  return (
    <div className="bg-blue-800 border w-full h-72 mt-20  rounded-t-lg ">
      <div>
        <ul className="flex justify-center text-center mt-20 gap-16 font-Signika  ">
          <Link to="aboutme" smooth={true}>
            {" "}
            <li className="text-white cursor-pointer">About</li>
          </Link>

          <Link to="skills" smooth={true}>
            {" "}
            <li className="text-white cursor-pointer">Skills</li>
          </Link>

          <Link to="services" smooth={true}>
            {" "}
            <li className="text-white cursor-pointer">Services</li>
          </Link>

          <Link to="contact" smooth={true}>
            {" "}
            <li className="text-white cursor-pointer">Contact</li>
          </Link>
        </ul>
      </div>{" "}
      <div className="flex gap-10 mt-10 text-gray-300 text-3xl justify-center text-center cursor-pointer">
        <RouterLink to="https://www.facebook.com/Milan.Cunar">
          <IoLogoFacebook />
        </RouterLink>
        <RouterLink to="https://github.com/micu-MILAN">
          <IoLogoGithub />
        </RouterLink>
        <RouterLink to="https://www.linkedin.com/in/milan-sunar-64277a21b/">
          <IoLogoLinkedin />
        </RouterLink>
        <RouterLink to="https://www.youtube.com/channel/UCULzvw0a88O96X_X3BwL4XA">
          <IoLogoYoutube />
        </RouterLink>
      </div>{" "}
      <div className="flex justify-center text-center mt-10 text-neutral-300 gap-1">
        <BiCopyright className="mt-1" />
        <h1>2023 Milan. All right reserved</h1>
      </div>
    </div>
  );
}

export default Footer;
