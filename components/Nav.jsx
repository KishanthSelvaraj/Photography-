"use client";
import React, { useState } from "react";
import {
  IoIosClose,
  IoMdArrowDropdown,
  IoMdArrowDropright,
} from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdEmail } from "react-icons/md";

import Image from "next/image";
import Link from "next/link";
// import logo from '@/public/logo.jpg';

const NavBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeProductsDropdown = () => {
    setShowProductsDropdown(false);
  };

  const closeMobileDropdown = () => {
    setShowMobileDropdown(false);
  };

  const toggleProductsDropdown = () => {
    setShowProductsDropdown(!showProductsDropdown);
  };

  const toggleMobileDropdown = () => {
    setShowMobileDropdown(!showMobileDropdown);
  };

  const handleProductsMouseEnter = () => {
    setShowProductsDropdown(true);
  };

  const handleProductsMouseLeave = () => {
    setShowProductsDropdown(false);
  };

  return (
    <div>
      {/* Desktop Navigation    bg-transparent */}
      <div className="flex bg-white navbar w-full py-2 justify-between items-center z-50 lg:px-16 md:px-10 px-10">
        <div className="md:w-32  w-24 h-auto mx-10  ">
          <a
            href="#"
            class="flex items-center justify-center text-2xl font-semibold text-black"
          >
            <img
              src="aklogo.png"
              class=" h-12 lg:h-16 md:h-16"
              alt="Landwind Logo"
            />
           <p className="text-black"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7CC9B1] to-[#069376]">AK</span>Photography</p>
          </a>
        </div>

        <div className="menu  w-full hidden md:flex justify-end gap-7 ml-5">
          <ul className="flex gap-7 font-medium">
            <li className="cursor-pointer">
              <Link href="/" className="hover:text-[#34b69c]">
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="#ourservices" className="hover:text-[#34b69c]">
                Services
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/office" className="hover:text-[#34b69c]">
                Gallery
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/contact" className="hover:text-[#34b69c]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-3 mr-5">
          <div className="menu md:hidden">
            <button
              onClick={toggleSidebar}
              className="text-xl font-bold  cursor-pointer"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`text-center fixed top-0 left-0 bg-[#1a1a1a] text-white w-full h-full z-50 p-4 md:hidden transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-start mb-4 justify-end">
          <div
            className="text-4xl font-bold cursor-pointer"
            onClick={toggleSidebar}
          >
            <IoIosClose />
          </div>
        </div>
        <ul className="flex flex-col gap-7">
          <li
            className="cursor-pointer  pb-2  px-2 font-medium"
            onClick={toggleSidebar}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className="cursor-pointer  pb-2  px-2 font-medium"
            onClick={toggleSidebar}
          >
            <Link href="/about">About Us</Link>
          </li>
          <li
            className="cursor-pointer  pb-2  px-2 font-medium"
            onClick={toggleSidebar}
          >
            <Link href="/products">Product</Link>
          </li>
          <li
            className="cursor-pointer  pb-2  px-2 font-medium"
            onClick={toggleSidebar}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
