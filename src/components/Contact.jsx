import React from "react";
import { HiOutlinePhone } from "react-icons/hi2";
import { TfiEmail } from "react-icons/tfi";
import { BiLocationPlus } from "react-icons/bi";

function Contact() {
  return (
    <div className="mx-80 mt-32  ml- m-auto">
      <div className="justify-center text-center">
        <h1 className="font-Signika text-5xl">Contact Me</h1>
        <p className="font-semibold text-zinc-500 font-comcs"> Get in touch</p>
      </div>
      <div className="flex gap-14">
        <div>
          {/*CallMe*/}
          <div className="flex gap-1 mt-10">
            <HiOutlinePhone className="text-3xl text-blue-800 mt-3" />
            <div>
              <h1 className="text-3xl font-Gabarito text-slate-900">Call Me</h1>
              <p className="font-Gabarito text-slate-500">+977-9846659674</p>
            </div>
          </div>
          {/*Email*/}
          <div className="flex gap-1 mt-10">
            <TfiEmail className="text-3xl text-blue-800 mt-3" />
            <div>
              <h1 className="text-3xl font-Gabarito text-slate-900">Email</h1>
              <p className="font-Gabarito text-slate-500">
                micubict999@gmail.com
              </p>
            </div>
          </div>
          {/*Location*/}
          <div className="flex gap-1 mt-10">
            <BiLocationPlus className="text-3xl text-blue-800 mt-3" />
            <div>
              <h1 className="text-3xl font-Gabarito text-slate-900">
                Location
              </h1>
              <p className="font-Gabarito text-slate-500">Tanahun, Nepal</p>
            </div>
          </div>
        </div>
        {/*contactform*/}
        <div className="mt-10">
          <form>
            <div className="flex gap-11">
              {" "}
              <div>
                <input
                  type="text"
                  name="name"
                  className=" p-2  border rounded-lg "
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  className=" p-2  border rounded-lg"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className=" mt-5">
              <textarea
                type="text"
                name="message"
                className=" p-2 w-[442px] border rounded-lg "
                placeholder="Project"
              ></textarea>
            </div>
            <div className="  mt-5">
              <textarea
                name="message"
                className="w-full h-44 p-2 border rounded-lg"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className=" w-24 bg-blue-800 text-white justify-center text-center p-2 rounded-lg hover:bg-blue-600  "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
