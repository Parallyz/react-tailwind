import DarkModeSwitch from "../checkbox/DarkModeSwitch";
import { Icons } from "../../utils/imagePath";
import React from "react";

function Header() {
  return (
    <header className="container z-10 absolute left-[50%] translate-x-[-50%] py-[1.625rem] flex justify-between items-center">
      <div className="order-1 lg:order-2">
        <button className="block xl:hidden ">
          <img
            src={Icons.Burger}
            className="w-6 h-6 md:w-8 md:h-8"
            alt="burger"
          />
        </button>
        <nav className="hidden xl:block">
          <ul className="flex space-x-5 font-playfairDisplay text-primaryColor text-xl">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Categories</a>
            </li>
            <li>
              <a href="">About </a>
            </li>
            <li>
              <a href="">Contact Us </a>
            </li>
          </ul>
        </nav>
      </div>
      <button className="order-2 lg:order-1">
        <img
          className=" w-[104px] h-[26px] md:w-[144px] md:h-[36px]"
          src={Icons.Logo}
          alt="logo"
        />
      </button>
      <div className="space-x-3 md:space-x-12  order-3 flex items-center">
        <DarkModeSwitch />
        <button>
          <img className="w-7 h-7" src={Icons.Search} alt="search" />
        </button>
        <button>
          <img className="w-7 h-7" src={Icons.Trolley} alt="search" />
        </button>
        <button>
          <img className="w-7 h-7" src={Icons.User} alt="search" />
        </button>
      </div>
    </header>
  );
}

export default Header;
