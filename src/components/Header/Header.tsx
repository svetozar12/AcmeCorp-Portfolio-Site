import Image from "next/image";
import Hamburger from "@/components/Header/subcomponents/Hamburger";
import styles from "./Header.module.css";
import Overlay from "@/components/Header/subcomponents/Overlay";
import { useState } from "react";
import MobileMenuHeader from "./subcomponents/MenuHeader";
import MobileMenuList from "./subcomponents/MenuList";
import useIsMobile from "../../hooks/useIsMobile";
import MenuItems from "./subcomponents/MenuItems";

function Header() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile && (
        <Overlay open={open}>
          <MobileMenuHeader setOpen={setOpen} />
          <MobileMenuList />
        </Overlay>
      )}
      <div className="relative flex justify-center w-full">
        <header
          className={`${styles.container} absolute flex justify-between items-center w-11/12 max-w-7xl`}
        >
          <h1 className="text-white text-center font-bold text-3xl mr-4">
            AcmeCorp
          </h1>
          <Hamburger setOpen={setOpen} />
          <MenuItems />
        </header>
      </div>
    </>
  );
}

export default Header;
