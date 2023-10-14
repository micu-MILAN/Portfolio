import React from "react";
import { DiCss3, DiHtml5, DiReact, DiPhotoshop } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { SiTailwindcss } from "react-icons/si";
function Skills() {
  return (
    <div className="mx-52 mt-32 m-auto">
      <div className="justify-center text-center">
        <h1 className="font-Signika text-5xl">Skills</h1>
        <p className="font-semibold text-zinc-500 font-comcs">
          My technical level
        </p>
      </div>
      <div>
        <div className=" mt-10 ">
          <div className="flex gap-10">
            <div className=" h-[200px] w-[270px] rounded-lg py-2 px-2">
              <DiHtml5 className="text-blue-800 text-6xl ml-[96px]" />
              <h1 className="justify-center text-center font-Signika">HTML</h1>

              <p className="justify-center font-comcs text-zinc-500 text-justify">
                HTML is the foundation of web pages and is used for webpage
                development by structuring websites and web apps.
              </p>
            </div>
            <div className=" h-[200px] w-[270px] rounded-lg py-2 px-2">
              <DiCss3 className="text-blue-800 text-6xl ml-[96px]" />
              <h1 className="justify-center text-center font-Signika">CSS</h1>

              <p className="justify-center font-comcs text-zinc-500 text-justify">
                CSS describes how HTML elements are to be displayed on screen,
                paper, or in other media.
              </p>
            </div>
            <div className=" h-[200px] w-[270px] rounded-lg py-2 px-2">
              <DiReact className="text-blue-800 text-6xl ml-[96px]" />
              <h1 className="justify-center text-center font-Signika">React</h1>

              <p className="justify-center font-comcs text-zinc-500 text-justify">
                React can be used to build web, mobile, and desktop
                applications, making it a versatile framework for cross-platform
                development.
              </p>
            </div>
          </div>
          <div className="flex mt-10 gap-10">
            <div className=" h-[200px] w-[270px] rounded-lg py-2 px-2">
              <SiTailwindcss className="text-blue-800 text-6xl ml-[96px]" />
              <h1 className="justify-center text-center font-Signika">
                Tailwind
              </h1>

              <p className="justify-center font-comcs text-zinc-500 text-justify">
                Tailwind CSS is basically a utility-first CSS framework for
                rapidly building custom user interfaces.
              </p>
            </div>
            <div className=" h-[200px] w-[270px] rounded-lg py-2 px-2">
              <DiPhotoshop className="text-blue-800 text-6xl ml-[96px]" />
              <h1 className="justify-center text-center font-Signika">
                Photoshop
              </h1>

              <p className="justify-center font-comcs text-zinc-500 text-justify">
                Photoshop is an image creation, graphic design and photo editing
                software developed by Adobe.
              </p>
            </div>
            <div className=" h-[200px] w-[270px] rounded-lg py-2 px-2">
              <FiFigma className="text-blue-800 text-6xl ml-[96px]" />
              <h1 className="justify-center text-center font-Signika">Figma</h1>

              <p className="justify-center font-comcs text-zinc-500 text-justify">
                Figma is a vector graphics editor and prototyping tool that is
                often used for UI design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
