import { Link, useLocation, useNavigate } from "react-router-dom";
import propTypes from "prop-types";

import Star from "./Star";
import ItemsQuantity from "./ItemsQuantity";

import { convertUpperCase } from "../utils/helpers";
import { useQueryString } from "../hooks/useQueryString";

const DEFAULT_NAV = [
  { name: "Home", link: `/` },
  { name: "listen", link: `/listen` },
  { name: "videos", link: `/videos` },
  { name: "tour", link: `/tour` },
  { name: "store", link: `/store` },
];

const STORE_NAV = [
  { name: "Home", link: `/` },
  { name: "All", link: `/store` },
  { name: "FH", link: `/store/found-heaven` },
  { name: "Superache", link: `/store/superache` },
  { name: "Cart", link: `/store/shopping-cart` },
];

function Nav() {
  const { pathname } = useLocation();
  const { defaultQueryString } = useQueryString();
  const navigate = useNavigate();

  const navLinks = pathname.includes("store") ? STORE_NAV : DEFAULT_NAV;

  function handleNavigating(link) {
    if (link.includes("store")) navigate(`${link}?${defaultQueryString}`);
    if (!link.includes("store") || link.includes("shopping-cart"))
      navigate(link);
  }

  const style = pathname === "/" ? { borderBottom: "none" } : {};

  return (
    <nav style={style}>
      <ul>
        {navLinks.map((nav) => {
          return (
            <li key={nav.name} onClick={() => handleNavigating(nav.link)}>
              <Star link={nav.link} />
              <Link>{convertUpperCase(nav.name)}</Link>
              <ItemsQuantity link={nav.link} />
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
