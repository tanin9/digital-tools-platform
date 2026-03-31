import React from 'react';

const Badge = () => {
  return (
    <>
      <div
        className="container mx-auto my-4 bg-linear-to-r from-[#4F39F6] to-[#9514F5]
       text-white font-bold grid grid-cols-3 divide-x-2 p-6 "
      >
        <div className=" flex flex-col justify-center items-center">
          <p className="text-[4vh] lg:text-[8vh]   ">50K+</p>
          <p className="text-[1vh] lg:text-[3vh] font-light">Active Users</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p className="text-[4vh] lg:text-[8vh]   ">200+</p>
          <p className="text-[1vh] lg:text-[3vh] font-light ">Premium Tools</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p className="text-[4vh] lg:text-[8vh]   ">4.9</p>
          <p className="text-[1vh] lg:text-[3vh] font-light ">Rating</p>
        </div>
      </div>

      <div className="container mx-auto mt-25 mb-10 flex flex-col justify-center items-center space-y-4">
        <p className="font-extrabold text-2xl md:text-5xl  ">
          Premium Digital Tools
        </p>
        <p className="font-light text-[1.4vh] text-gray-400 text-center">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>
    </>
  );
};

export default Badge;