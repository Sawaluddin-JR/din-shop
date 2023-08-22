import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-blue-100">
      <div className="mx-auto py-8 px-10 flex justify-between">
        <div className="w-1/3">
          <div className="flex items-center justify-center -ml-36">
            <img src="logo.jpg" alt="logo" className="w-14 h-14 rounded-full" />
            <h1 className="text-2xl font-bold text-gray-800">
              DIN-<span className="text-blue-900">SHOP</span>
            </h1>
          </div>
          <div className="detail ml-12">
            <p className="text-sm text-gray-700 mt-2">
              We are a team of designers and developers that create high quality
              WordPress
            </p>
            <div className="icon mt-4 flex">
              <li className="mr-4 list-none">
                <RiFacebookFill className="text-gray-600 hover:text-blue-500 transition text-xl" />
              </li>
              <li className="mr-4 list-none">
                <AiOutlineInstagram className="text-gray-600 hover:text-blue-500 transition text-xl" />
              </li>
              <li className="mr-4 list-none">
                <AiOutlineTwitter className="text-gray-600 hover:text-blue-500 transition text-xl" />
              </li>
              <li className="mr-4 list-none">
                <BsYoutube className="text-gray-600 hover:text-blue-500 transition text-xl" />
              </li>
            </div>
          </div>
        </div>
        <div className="account">
          <h3 className="text-2xl text-gray-800">My Account</h3>
          <ul className="mt-2">
            <li className="text-gray-600 hover:text-blue-500 transition">
              Account
            </li>
            <li className="text-gray-600 hover:text-blue-500 transition">
              Order
            </li>
            <li className="text-gray-600 hover:text-blue-500 transition">
              Cart
            </li>
            <li className="text-gray-600 hover:text-blue-500 transition">
              Shipping
            </li>
            <li className="text-gray-600 hover:text-blue-500 transition">
              Return
            </li>
          </ul>
        </div>
        <div className="page">
          <h3 className="text-2xl text-gray-800">Pages</h3>
          <ul className="mt-2">
            <li className="text-gray-600 hover:text-blue-500 transition">
              Home
            </li>
            <li className="text-gray-600 hover:text-blue-500 transition">
              About
            </li>
            <li className="text-gray-600 hover:text-blue-500 transition">
              Contact
            </li>
            <li className="text-gray-600 hover:text-blue-500 transition">
              Terms & Conditions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;