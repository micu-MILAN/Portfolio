import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className=" py-4 w-full m-auto shadow-lg sticky top-0 bg-white ">
      <div className="md:flex justify-between items-center mx-36 ">
        {/* logo here*/}

        <div className="text-lg font-semibold cursor-pointer">
          <Link to="hero" smooth={true}>
            {" "}
            <img className="w-14 h-14" src="/assets/MICU logo.jpg" alt="" />
          </Link>
        </div>

        {/* Navlinks here*/}
        <div>
          <ul className="md:flex gap-9 font-Signika ">
            <Link to="aboutme" smooth={true}>
              {" "}
              <li className="text-black cursor-pointer">About</li>
            </Link>

            <Link to="skills" smooth={true}>
              {" "}
              <li className="text-black cursor-pointer">Skills</li>
            </Link>

            <Link to="services" smooth={true}>
              {" "}
              <li className="text-black cursor-pointer">Services</li>
            </Link>

            <Link to="contact" smooth={true}>
              {" "}
              <li className="text-black cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
