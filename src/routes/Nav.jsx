import { Link, useLocation } from "react-router-dom";
import propTypes from "prop-types";

function Nav({ navList, cartCount }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const newParam = new URLSearchParams([["page", "1"]]).toString();

  function handleScrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <nav>
      <ul>
        {navList.map((n) => {
          return (
            <li onClick={handleScrollToTop} key={n.category}>
              {(currentPath === n.link || currentPath === `/${n.link}`) && (
                <div className="nav-clicked">✪</div>
              )}
              {currentPath === `/store/${n.link}` && (
                <div className="nav-clicked">✪</div>
              )}
              {currentPath.includes(`${n.link}/products`) && (
                <div className="nav-clicked">✪</div>
              )}
              <Link to={`${n.link}?${newParam}`}>
                {n.category.toUpperCase()}
              </Link>
              {n.link === "shopping-cart" && cartCount ? (
                <div id="cart-count">
                  <span>{cartCount}</span>
                </div>
              ) : null}
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
