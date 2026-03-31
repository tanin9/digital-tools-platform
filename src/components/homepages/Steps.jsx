import React from "react";
import { RxPerson } from "react-icons/rx";
import { BsBoxSeam } from "react-icons/bs";
import { PiRocketLaunchDuotone } from "react-icons/pi";

const Steps = () => {
  return (
    <div className="container mx-auto bg-[#f9fafc] my-25 py-18">
      <div className="flex flex-col justify-center items-center space-y-2">
        <p className="font-extrabold text-2xl md:text-5xl">Get Started in 3 Steps</p>
        <p className="font-light text-[1.4vh] text-gray-400">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3 mt-7 px-10 lg:px-35">
        <div className="bg-white border border-gray-200 space-y-5  p-6 rounded-2xl flex flex-col justify-center items-center text-center">
          <div className=" ml-[14vh] lg:ml-[24vh] px-4 py-2 text-white  bg-linear-to-r from-[#4F39F6] to-[#9514F5] rounded-full w-fit">
            <p>1</p>
          </div>
          <div className="bg-[#f2e8fe] w-fit p-5 rounded-full">
            <RxPerson className="text-6xl text-[#4F39F6]" />
          </div>
          <div className="space-y-5 ">
            <p className="font-bold text-xl">Create Account</p>
            <p className="text-gray-400">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 space-y-5 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
          <div className="ml-[14vh] lg:ml-[24vh] px-4 py-2 text-white  bg-linear-to-r from-[#4F39F6] to-[#9514F5] rounded-full w-fit">
            <p>2</p>
          </div>
          <div className="bg-[#f2e8fe] w-fit p-5 rounded-full">
            <BsBoxSeam className="text-6xl text-[#4F39F6]" />
          </div>
          <div className="space-y-5 ">
            <p className="font-bold text-xl">Choose Products</p>
            <p className="text-gray-400">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 space-y-5 p-6  rounded-2xl flex flex-col justify-center items-center text-center">
          <div className="ml-[14vh] lg:ml-[24vh] px-4 py-2 text-white  bg-linear-to-r from-[#4F39F6] to-[#9514F5] rounded-full w-fit">
            <p>3</p>
          </div>
          <div className="bg-[#f2e8fe] w-fit p-5 rounded-full">
            <PiRocketLaunchDuotone className="text-6xl text-[#4F39F6]" />
          </div>
          <div className="space-y-5 ">
            <p className="font-bold text-xl">Start Creating</p>
            <p className="text-gray-400">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
