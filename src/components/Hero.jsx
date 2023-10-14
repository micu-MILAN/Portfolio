import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

function Hero() {
  return (
    <div className="mx-36">
      <div className="flex gap-36 m-auto ">
        <div className=" font-Signika text-6xl mt-36">
          <h1> Hi,</h1>
          <h1>
            I'am <span className="text-blue-800"> Milan Sunar</span>
          </h1>
          <h1>FrontEnd Developer</h1>
        </div>
        <div>
          <img
            className="w-[400px] h[400px] mt-24"
            src="/assets/micu.png"
            alt=""
          />
        </div>
      </div>
      <button className="bg-blue-800 text-white font-Signika hover:bg-blue-600 mt-0 h-10 w-[100px] rounded-lg cursor-pointerjustify-center hover:scale-105 ">
        <div className="flex justify-center gap-2 ">
          <h1>Hire Me</h1>
          <AiFillCaretRight className="mt-1" />
        </div>
      </button>
    </div>
  );
}

export default Hero;
