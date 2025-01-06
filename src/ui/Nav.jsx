import { Link, useLocation } from "react-router-dom";
import propTypes from "prop-types";

import styles from "./Nav.module.scss";

import { convertUpperCase } from "../utils/helpers";
import { useCartItem } from "../contexts/CartItemContext";

const DEFAULT_NAV = [
  { name: "Home", link: `/` },
  { name: "Listen", link: `/listen` },
  { name: "Videos", link: `/videos` },
  { name: "Tour", link: `/tour` },
  { name: "Store", link: `/store` },
];

const STORE_NAV = [
  { name: "Home", link: `/` },
  { name: "All", link: `/store` },
  { name: "FH", link: `/store/found-heaven` },
  { name: "Superache", link: `/store/superache` },
  { name: "Bag", link: `/store/shopping-cart` },
];

function Nav() {
  const { pathname } = useLocation();
  const { numItems } = useCartItem();

  console.log(pathname);

  const navLinks = pathname.includes("store") ? STORE_NAV : DEFAULT_NAV;
  const activeStyle = { fontWeight: "var(--text-weight-semi-bold)" };

  const activeEl = <div className={styles.active}>&nbsp;</div>;
  const NumItemsEl = <span className={styles.numItems}>({numItems})</span>;

  return (
    <nav className={styles.nav}>
      <ul>
        {navLinks.map((nav) => {
          return (
            <li key={nav.name}>
              {(pathname === nav.link ||
                pathname.includes(`${nav.link}/products`)) &&
                activeEl}
              {nav.name !== "Store" && (
                <Link
                  to={nav.link}
                  style={
                    pathname === nav.link ||
                    pathname.includes(`${nav.link}/products`)
                      ? activeStyle
                      : {}
                  }
                >
                  {convertUpperCase(nav.name)}
                </Link>
              )}
              {nav.name === "Store" && (
                <Link to={nav.link} target="_blank" rel="noopener noreferrer">
                  {convertUpperCase(nav.name)}
                </Link>
              )}

              {nav.link.includes("shopping-cart") && NumItemsEl}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  navList: propTypes.array,
  cartCount: propTypes.number,
};

export default Nav;
