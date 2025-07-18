import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
// import { Link } from "react-router-dom";
import lumera from "../../assets/Images/photo_2025-05-10_21-16-28-removebg-preview.png";
import { GoPerson } from "react-icons/go";
import { PiBasket } from "react-icons/pi";
import { LuHeart } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import MobileMenu from "../../MobileMenu";
import Home from "../../Landing/Home";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <nav className="bg-darkGray">
        <div className="container flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <figure>
            <img src={lumera} alt="Logo" />
          </figure>
          {/* Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-16 text-zinnwalditeBrown capitalize font-semibold">
              <li className="nav-link py-3 px-4 text-zinnwalditeBrown hover:cursor-pointer hover:text-timberWolf font-semibold">
                <ScrollLink to="home" smooth={true} duration={500}>
                  Home
                </ScrollLink>
              </li>
              <li className="nav-link py-3 px-4 text-zinnwalditeBrown hover:cursor-pointer hover:text-timberWolf font-semibold">
                <ScrollLink to="about" smooth={true} duration={500}>
                  About
                </ScrollLink>
              </li>
              <li className="nav-link py-3 px-4 text-zinnwalditeBrown hover:cursor-pointer hover:text-timberWolf font-semibold">
                <ScrollLink to="home" smooth={true} duration={500}>
                  Our Products
                </ScrollLink>
              </li>
              <li className="nav-link py-3 px-4 text-zinnwalditeBrown hover:cursor-pointer hover:text-timberWolf font-semibold">
                <ScrollLink to="home" smooth={true} duration={500}>
                  Best Seller
                </ScrollLink>
              </li>
            </ul>
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-16 text-zinnwalditeBrown capitalize font-semibold">
            <button className="hidden md:block">Log In</button>
            <button className="bg-timberWolf py-3 px-3 rounded-full hidden md:block">
              Sign Up
            </button>
          </div>
          {/* Icons */}
          <div className="flex items-center gap-10 text-zinnwalditeBrown capitalize font-semibold px-5">
            <button className="hover:bg-zinnwalditeBrown hover:text-timberWolf rounded-full p-2 duration-300">
              <LuHeart size={25} />
            </button>
            <button className="hover:bg-zinnwalditeBrown hover:text-timberWolf rounded-full p-2 duration-300">
              <PiBasket size={25} />
            </button>
            <button className="hover:bg-zinnwalditeBrown hover:text-timberWolf rounded-full p-2 duration-300">
              <GoPerson size={25} />
            </button>
          </div>
          {/* Mobile Burger */}
          <div
            className="md:hidden"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            <IoMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar */}
      <MobileMenu open={mobileMenu} />
    </>
  );
};

export default Header;
