import React from "react";
import { FaCheck } from "react-icons/fa6";
const Pricing = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="flex flex-col justify-center items-center space-y-2">
        <p className="font-extrabold text-2xl md:text-5xl">
          Simple, Transparent Pricing
        </p>
        <p className="font-light text-[1.4vh] text-gray-400">
          Choose the plan that fits your needs. Upgrade or downgrade
          anytime.{" "}
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 p-10 lg:px-28 lg:gap-6">
        <div className="text-gray-400 border-2 p-4  flex flex-col rounded-2xl bg-gray-100">
          <p className="text-black font-extrabold text-xl">Starter</p>
          <p className=" font-light ">Perfect for getting started</p>
          <p className="my-6">
            <span className="text-black text-4xl font-bold ">$0</span>/Month
          </p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>Access to 10 free tools</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>Basic templates</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>Community support</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>1 project per month</span>
            </li>
          </ul>

          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514F5] text-white rounded-4xl w-full mt-auto mb-3">
            Get Started Free
          </a>
        </div>
        <div className="relative text-white rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514F5] border-2 p-4 flex flex-col">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-[#fef3c6] text-[#e97a0b] text-[1vh] lg:text-[1.5vh] px-4 py-2 rounded-3xl">
              Most Popular
            </span>
          </div>

          <p className="font-extrabold text-xl">Pro</p>
          <p className=" font-light ">Best for professionals</p>
          <p className="my-6">
            <span className=" text-4xl font-bold ">$29</span>/Month
          </p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <FaCheck />
              <span>Access to all premium tools</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck />
              <span>Unlimited templates</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck />
              <span>Priority support</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck />
              <span>Unlimited projects</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck />
              <span>Cloud sync</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck />
              <span>Advanced analytics</span>
            </li>
          </ul>

          <a className="btn bg-white text-[#4F39F6] w-full mt-auto mb-3 rounded-4xl ">
            Start Pro Trial
          </a>
        </div>
        <div className="text-gray-400 rounded-2xl bg-gray-100 border-2 p-4 flex flex-col">
          <p className="text-black font-extrabold text-xl">Enterprise</p>
          <p className=" font-light ">For teams and businesses</p>
          <p className="my-6">
            <span className="text-black text-4xl font-bold ">$99</span>/month
          </p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>Everything in Pro</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>Team collaboration</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>Custom integrations</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>Dedicated support</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>SLA guarantee</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>Custom branding</span>
            </li>
          </ul>

          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514F5] text-white w-full mt-auto mb-3 rounded-4xl">
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
