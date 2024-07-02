import { Link, useLocation } from "react-router-dom";
import propTypes from "prop-types";

import { useCartItem } from "../contexts/CartItemContext";
import { convertUpperCase } from "../utils/helpers";

function Nav({ navList }) {
  const location = useLocation();
  const { numItems } = useCartItem();

  const currentPath = location.pathname;
  const newParam = new URLSearchParams([["page", "1"]]).toString();
  const starSign = <div className="nav-clicked">✪</div>;

  return (
    <nav>
      <ul>
        {navList.map((n) => {
          return (
            <li key={n.category}>
              {(currentPath === n.link || currentPath === `/${n.link}`) &&
                starSign}
              {currentPath === `/store/${n.link}` && starSign}
              {currentPath.includes(`${n.link}/products`) && starSign}
              <Link to={`${n.link}?${newParam}`}>
                {convertUpperCase(n.category)}
              </Link>
              {n.link === "shopping-cart" && numItems ? (
                <div id="cart-count">
                  <span>{numItems}</span>
                </div>
              ) : (
                ""
              )}
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
