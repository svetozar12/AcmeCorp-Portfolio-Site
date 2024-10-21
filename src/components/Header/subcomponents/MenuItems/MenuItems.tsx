import React from "react";
import styles from "./MenuItems.module.css";
const MenuItems = () => {
  return (
    <nav className="max-lg:hidden w-full items-center">
      <ul className="flex justify-between">
        <div className="flex">
          <li>
            <a href="/aboutUs" className="LinkWhite">
              About Us
            </a>
          </li>

          <li>
            <a href="/services" className="LinkWhite">
              Services
            </a>
          </li>
          <li>
            <a href="/portfolio" className="LinkWhite">
              Portfolio
            </a>
          </li>
        </div>
        <li className="bg-white rounded-full hover:bg-opacity-80">
          <a
            href="/contact"
            className={`${styles.contact} LinkWhite !text-transparent`}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuItems;
