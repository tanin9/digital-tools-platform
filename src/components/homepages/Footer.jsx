import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
      <div className="container mx-auto  ">
        <footer className="footer sm:footer-horizontal bg-[#101727]  text-gray-400 p-10 lg:p-20">
          <nav>
            <h6 className=" font-bold text-white text-3xl">DigiTools</h6>
            <p className="link link-hover lg:w-[70vh]">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </nav>
          <nav>
            <h6 className="text-white">Product</h6>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Templates</a>
            <a className="link link-hover">Integrations</a>
          </nav>
          <nav>
            <h6 className="text-white">Company</h6>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Press</a>
          </nav>
          <nav>
            <h6 className="text-white">Resources</h6>
            <a className="link link-hover">Documentation</a>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Community</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="text-white">Social Links</h6>
            <div className="flex gap-2">
              <a className="bg-white p-2 text-[#101727] rounded-4xl">
                <AiFillInstagram className="text-xl" />
              </a>
              <a className="bg-white p-2 text-[#101727] rounded-4xl">
                <FaFacebookSquare className="text-xl" />
              </a>
              <a className="bg-white p-2 text-[#101727] rounded-4xl">
                <FaXTwitter className="text-xl" />
              </a>
            </div>
          </nav>
        </footer>
        <footer className="footer bg-[#101727] flex justify-between text-gray-400 border-base-300 border-t px-10 py-4 lg:px-20">
          <aside>
            <p> © {new Date().getFullYear()} Digitools. All rights reserved.</p>
          </aside>
          <nav className=" ">
            <div className="grid grid-flow-col gap-4">
              <a>Privacy Policy</a>
              <a>Terms of Service</a>
              <a>Cookies</a>
            </div>
          </nav>
        </footer>
      </div>
    );
};

export default Footer;