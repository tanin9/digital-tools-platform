import React from 'react';

const Workflow = () => {
    return (
      <div
        className="container mx-auto mt-4 bg-linear-to-r from-[#4F39F6] to-[#9514F5]
       text-white font-bold p-[5vh] "
      >
        <div className=" flex flex-col justify-center items-center">
          <p className="text-[3vh] lg:text-[4vh]   ">
            Ready to Transform Your Workflow?
          </p>
          <p className="text-[1vh] lg:text-[2vh] font-light text-center">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br /> Start your free trial today.
          </p>
          <div className="my-3 flex gap-2">
            <a className="btn bg-white text-[#4F39F6] rounded-4xl">
              Explore Products
            </a>
            <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514F5] text-white rounded-4xl">
              View Pricing
            </a>
          </div>
          <p className="text-[1vh] lg:text-[2vh] font-light text-center">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    );
};

export default Workflow;