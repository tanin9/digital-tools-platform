import React from 'react';

const Badge = () => {
    return (
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
    );
};

export default Badge;