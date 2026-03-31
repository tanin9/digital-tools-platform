import React from "react";

const Navbar = ({ carts}) => {
  return (
    <div>
      <div className="container mx-auto lg:px-10 navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="font-semibold menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li className="md:hidden">
                <a>
                  <img
                    src="/src/assets/images/shopping-cart.png"
                    alt="shoping-cart"
                  />
                  {carts > 0 && (
                    <span className="absolute -top-1  left-7 bg-red-500
                     text-white text-xs font-bold w-5 h-5 rounded-full
                     flex items-center justify-center">
                      {carts}
                    </span>
                  )}
                </a>
              </li>
              <li className="md:hidden">
                <a className="">Login</a>
              </li>
            </ul>
          </div>
          <a className="font-extrabold text-xl md:text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514F5] bg-clip-text text-transparent">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-1">
          <a className="btn btn-ghost rounded-4xl hidden md:flex relative">
            <img
              src="/src/assets/images/shopping-cart.png"
              alt="shopping-cart"
            />
            {carts > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500
               text-white text-xs font-bold w-5 h-5 rounded-full
                flex items-center justify-center">
                {carts}
              </span>
            )}
          </a>
          <a className="btn btn-ghost rounded-4xl hidden md:flex">Login</a>
          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514F5] text-white rounded-4xl">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
