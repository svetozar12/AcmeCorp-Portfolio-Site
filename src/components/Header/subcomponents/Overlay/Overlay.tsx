import styles from "./Overlay.module.css";

interface IOverlay {
  open: boolean;
  children: React.JSX.Element | React.JSX.Element[];
}

function Overlay({ open, children }: IOverlay) {
  console.log("Overlay", open);
  return (
    <div
      className={`absolute z-20 w-screen h-screen bg-white ${
        !open && styles.overlay
      } ${open && styles["overlay-open"]} transition-opacity duration-100`}
    >
      {children}
    </div>
  );
}

export default Overlay;
