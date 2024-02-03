import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo({ type }) {
  return (
    <Link className={styles.logoLink} to="/">
      <img
        src="/logo.svg"
        alt="url shortening App logo"
        className={`${styles.logo} ${styles[type]}`}
      />
    </Link>
  );
}

export default Logo;
