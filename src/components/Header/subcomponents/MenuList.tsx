import styles from "./MenuList.module.css";

function MenuList() {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <a href="" className="Link">
            Products
          </a>
        </li>
        <li>
          <a href="" className="Link">
            Solutions
          </a>
        </li>

        <li>
          <a href="" className="Link">
            Resources
          </a>
        </li>
        <li>
          <a href="" className="Link">
            Developers
          </a>
        </li>

        <li>
          <a href="" className="Link">
            Solutions
          </a>
        </li>

        <li>
          <a href="" className="Link">
            Contact
          </a>
        </li>

        <li>
          <a href="" className="Link">
            Pricing
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MenuList;
