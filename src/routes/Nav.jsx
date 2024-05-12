import { Link, useLocation, useLoaderData } from "react-router-dom";
import propTypes from "prop-types";

function Nav({ navList, cartCount }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const newParam = new URLSearchParams([["page", "1"]]).toString();
  const capitalizeLetters = useLoaderData();
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
                {capitalizeLetters(n.category)}
              </Link>
              {n.link === "shopping-cart" && cartCount ? (
                <div id="cart-count">
                  <span>{cartCount}</span>
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
