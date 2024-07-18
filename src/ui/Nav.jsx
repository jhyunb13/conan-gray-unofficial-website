import { Link, useLocation, useNavigate } from "react-router-dom";
import propTypes from "prop-types";

import Star from "./Star";
import ItemsQuantity from "./ItemsQuantity";

import { convertUpperCase } from "../utils/helpers";
import { useData } from "../contexts/DataContext";

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
  const { dispatch } = useData();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navLinks = pathname.includes("store") ? STORE_NAV : DEFAULT_NAV;
  const search = new URLSearchParams([["page", "1"]]).toString();

  function handleNavigating(link) {
    dispatch({ type: "filter/reset" });

    if (link.includes("store")) navigate(`${link}?${search}`);

    if (!link.includes("store") || link.includes("shopping-cart"))
      navigate(link);
  }

  return (
    <nav>
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
