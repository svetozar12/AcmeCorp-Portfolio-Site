import Image from "next/image";
import Hamburger from "@/components/Header/subcomponents/Hamburger";
import styles from "./Header.module.css";
import Overlay from "@/components/Header/subcomponents/Overlay";
import { useState } from "react";
import MenuHeader from "./subcomponents/MenuHeader";
import MenuList from "./subcomponents/MenuList";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Overlay open={open}>
        <MenuHeader setOpen={setOpen} />
        <MenuList />
      </Overlay>
      <div className="relative flex justify-center w-full">
        <header
          className={`${styles.container} absolute flex justify-between items-center w-11/12 max-w-7xl`}
        >
          <h1 className="text-white font-bold text-3xl">AcmeCorp</h1>
          <Hamburger setOpen={setOpen} />
        </header>
      </div>
    </>
  );
}

export default Header;
