import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
            //We open dynamic block to find last element and change it's margin which is equal to ${ index === navLinks.length -1 },  we want it to be 0, but otherwise (other elements) we want it to be mr-10
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        {/* We map over our navlinks, we get one nav link and then index, and we want to instantly return something. When you are instantly returning, you put parentheses not curly braces */}
        {/* We want to return a list item, and every list item must have a key, because we are inside a map */}
        {/* That list will have anchor tags that navigate (we want to go to a specific link) to nav id, which is a dynamic string, because it will be unique */}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        {/* If the toggle is on we want to show close icon, otherwise we want to show menu icon  */}

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          //This div will have dynamic className that is going to check (``) if toggle is turned on, if it is then its going to be a flex container, otherwise its hidden
          >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
                //We open dynamic block to find last element and change it's margin which is equal to ${ index === navLinks.length -1 },  we want it to be 0, but otherwise (other elements) we want it to be mr-10
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            {/* We map over our navlinks, we get one nav link and then index, and we want to instantly return something. When you are instantly returning, you put parentheses not curly braces */}
            {/* We want to return a list item, and every list item must have a key, because we are inside a map */}
            {/* That list will have anchor tags that navigate (we want to go to a specific link) to nav id, which is a dynamic string, because it will be unique */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

//In react, you should never update the state using the previous version of that same old state
//If you want to change the state, then you need to create a callback function, setToggle and then you call it prev and then you pass not prev, this way react makes sure that it keeps the state up to date

export default Navbar;
