import React from "react";
import {
  GoFileCode,
  GoArrowRight,
  GoProjectTemplate,
  GoPencil,
} from "react-icons/go";

function Services() {
  return (
    <div>
      <div className="mx-80 mt-32  ml- m-auto">
        <div className="justify-center text-center">
          <h1 className="font-Signika text-5xl">Services</h1>
          <p className="font-semibold text-zinc-500 font-comcs">
            {" "}
            What I offer
          </p>
        </div>
        <div className="flex gap-8">
          {/*FrontEnd Developer*/}
          <div className="shadow-2xl border border-slate-200  rounded-xl bg-white h-[240px] w-[200px]  mt-10">
            <GoFileCode className="ml-[73px] mt-9 text-5xl text-blue-800" />
            <h1 className="justify-center text-center font-comcs text-2xl mt-5">
              FrontEnd Developer
            </h1>
            <h1 className="font-extralight text-slate-500 justify-center text-center mt-4 flex gap-2 cursor-pointer">
              View More <GoArrowRight className="mt-1" />
            </h1>
          </div>
          {/*UI/UX Designer*/}
          <div className="shadow-2xl border border-slate-200  rounded-xl bg-white h-[240px] w-[200px] mt-10  ">
            <GoProjectTemplate className="ml-[73px] mt-9 text-5xl text-blue-800" />
            <h1 className="justify-center text-center font-comcs text-2xl mt-5 px-4 ">
              UI/UX Designer
            </h1>
            <h1 className="font-extralight text-slate-500 justify-center text-center mt-4 flex gap-2 cursor-pointer">
              View More <GoArrowRight className="mt-1" />
            </h1>
          </div>
          {/*Graphic Designer*/}
          <div className="shadow-2xl  border border-slate-200  rounded-xl bg-white h-[240px] w-[200px] mt-10">
            <GoPencil className="ml-[73px] mt-9 text-5xl text-blue-800" />
            <h1 className="justify-center text-center font-comcs text-2xl mt-5 px-4">
              Graphic Designer
            </h1>
            <h1 className="font-extralight text-slate-500 justify-center text-center mt-4 flex gap-2 cursor-pointer">
              View More <GoArrowRight className="mt-1" />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
