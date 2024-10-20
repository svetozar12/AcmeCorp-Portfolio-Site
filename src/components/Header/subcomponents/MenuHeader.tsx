import React, { Dispatch, SetStateAction } from "react";
import styles from "./MenuHeader.module.css";

interface IMenuHeader {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuHeader = ({ setOpen }: IMenuHeader) => {
  return (
    <div className={`flex items-center justify-between ${styles.container}`}>
      <h1
        className="font-bold text-3xl"
        style={{ color: "var(--accent-color)" }}
      >
        AcmeCorp
      </h1>
      <svg
        onClick={() => setOpen(false)}
        className="cursor-pointer"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Close mobile navigation</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.00061 6.58508L12.5926 1.99312C12.9835 1.60223 13.6172 1.60223 14.0081 1.99312C14.399 2.384 14.399 3.01775 14.0081 3.40864L9.41678 7.99995L14.0081 12.5913C14.399 12.9822 14.399 13.6159 14.0081 14.0068C13.6172 14.3977 12.9835 14.3977 12.5926 14.0068L8.00061 9.41482L3.40864 14.0068C3.01775 14.3977 2.384 14.3977 1.99312 14.0068C1.60223 13.6159 1.60223 12.9822 1.99312 12.5913L6.58443 7.99995L1.99312 3.40864C1.60223 3.01775 1.60223 2.384 1.99312 1.99312C2.384 1.60223 3.01775 1.60223 3.40864 1.99312L8.00061 6.58508Z"
          fill="#4F5B76"
        ></path>
      </svg>
    </div>
  );
};

export default MenuHeader;
