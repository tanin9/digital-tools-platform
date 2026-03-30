import React from 'react';
import { CiPlay1 } from "react-icons/ci"; 
import { CgMediaLive } from "react-icons/cg";

const Board = () => {
    return (
      <div className="container mx-auto grid md:grid-cols-2 py-4 px-7 justify-around items-center gap-3">
        <div>
          <div className="bg-[#e1e7ff] rounded-2xl px-3 py-1 w-fit flex items-center gap-1">
            <CgMediaLive className="text-[#4F39F6]" />
            <p className="bg-linear-to-r from-[#4F39F6] to-[#9514F5] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </p>
          </div>
          <div>
            <p className="font-extrabold  text-[40px] lg:text-[72px]">
              Supercharge Your Digital Workflow
            </p>
          </div>
          <div>
            <p>
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
          </div>
          <div className="my-3 flex gap-2">
            <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514F5] text-white rounded-4xl">
              Explore Products
            </a>
            <a className="btn border-[#4F39F6] rounded-4xl">
              <CiPlay1 className="text-xl text-[#4F39F6] font-bold" />{" "}
              <span className="  text-[#4F39F6] font-bold">
                Watch Demo
              </span>
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            className=" h-[50vh] lg:h-[62vh]"
            src="/src/assets/images/banner.png"
            alt=""
          />
        </div>
      </div>
    );
};

export default Board;