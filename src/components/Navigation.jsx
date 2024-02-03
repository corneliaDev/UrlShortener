import { NavLink } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";

import styles from "./Navigation.module.css";
import { useEffect, useState } from "react";

function Navigation() {
  const [navOpen, setNavOpen] = useState(false);

  /*  function handleNavOpen() {
    console.log("click");
    if (navOpen) setNavOpen(true);
    if (!navOpen) setNavOpen(false);
  } */

  return (
    <div className={styles.nav}>
      <Logo type={"logoHeader"} />
      <nav
        className={
          !navOpen ? styles.navDesktop : `${styles.open} ${styles.navDesktop}`
        }
      >
        <ul>
          <NavLink to="/features">
            <li>Features</li>
          </NavLink>
          <NavLink to="/pricing">
            <li>Pricing</li>
          </NavLink>
          <NavLink to="/resources">
            <li>Resources</li>
          </NavLink>
        </ul>
        <div className={styles.loginArea}>
          <div className={styles.login}>
            <NavLink to="/login">
              <div>Login</div>
            </NavLink>
          </div>
          <Button type="primary">Sign up</Button>
        </div>
      </nav>

      <div className={styles.mobile}>
        <nav className={styles.btnMobile}>
          {!navOpen ? (
            <button
              aria-label="open navigation"
              className={styles.mobileNavMenu}
              onClick={() => setNavOpen(true)}
            ></button>
          ) : (
            <button
              className={styles.mobileNavClose}
              onClick={() => setNavOpen(false)}
            >
              X
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
