import React from "react";
import { HiOutlineDownload } from "react-icons/hi";

function Aboutme() {
  return (
    <div className="mx-64 mt-32 ">
      <div className="justify-center text-center">
        <h1 className="font-Signika text-5xl "> About Me </h1>
        <p className="font-semibold text-zinc-500 font-comcs">
          My Introduction
        </p>
      </div>
      <div className="flex mt-10 gap-32">
        <div>
          {" "}
          <img
            className="h-[220px] w-[400px rounded-3xl shadow-2xl"
            src="/assets/Ab.JPG"
            alt=""
          />
        </div>
        <div>
          {" "}
          <p className="w-[360px] font-comcs text-xl text-zinc-500">
            {" "}
            Web Developer, with extensive knowledge and year of experience,
            working in web technologies and FrontEnd Designer, delivering
            quality work.
          </p>
          <div className="mt-5 flex gap-10">
            <div className=" w-20 h-20 text-center">
              <h1 className="font-Gabarito text-xl">08+</h1>
              <p className="font-Signika text-zinc-500">Years Experience</p>
              <p></p>
            </div>
            <div className=" w-20 h-20 text-center">
              <h1 className="font-Gabarito text-xl">10+</h1>
              <p className="font-Signika text-zinc-500">Completed Project</p>
              <p></p>
            </div>
            <div className=" w-20 h-20 text-center">
              <h1 className="font-Gabarito text-xl">04+</h1>
              <p className="font-Signika text-zinc-500">Companies Worked</p>
              <p></p>
            </div>
          </div>
          <a href="CURRICULUM VITE.pdf" download="CURRICULUM VITE.pdf">
            <button className="h-14 w-40 mt-5 rounded-lg bg-blue-800 hover:bg-blue-600 text-white font-Signika hover:scale-105 ">
              {" "}
              <div className="flex justify-center gap-2">
                <h1> Downlode CV</h1>
                <HiOutlineDownload className="text-xl mt-1" />
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
