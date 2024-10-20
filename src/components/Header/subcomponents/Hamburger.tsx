import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

interface IHamburger {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function Hamburger({ setOpen }: IHamburger) {
  return (
    <button onClick={() => setOpen(true)} className="MenuButton lg:hidden">
      <svg width="16" height="10" viewBox="0 0 16 10">
        <g fillRule="evenodd" fill="white">
          <rect y="8" width="16" height="2" rx="1"></rect>
          <rect y="4" width="16" height="2" rx="1"></rect>
          <rect width="16" height="2" rx="1"></rect>
        </g>
      </svg>
    </button>
  );
}

export default Hamburger;
