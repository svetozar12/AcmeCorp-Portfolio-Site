import React from "react";

const MenuItems = () => {
  return (
    <nav className="max-lg:hidden w-full items-center">
      <ul className="flex justify-between">
        <div className="flex">
          <li>
            <a href="" className="LinkWhite">
              Home
            </a>
          </li>
          <li>
            <a href="" className="LinkWhite">
              About Us
            </a>
          </li>
          <li>
            <button className="LinkWhite">Services</button>
          </li>
          <li>
            <a href="" className="LinkWhite">
              Portfolio
            </a>
          </li>
        </div>
        <li className="bg-white rounded-full hover:bg-opacity-80">
          <a href="" className="LinkWhite !text-black">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuItems;
