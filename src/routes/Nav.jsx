import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const currentPath = location.pathname;

  function handleScrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <nav>
      <ul>
        <li onClick={handleScrollToTop}>
          {currentPath === "/" && <div className="nav-clicked">✪</div>}
          <Link to={"/"}>{`home`.toUpperCase()}</Link>
        </li>
        <li onClick={handleScrollToTop}>
          {currentPath === "/listen" && <div className="nav-clicked">✪</div>}
          <Link to={"/listen"}>{`listen`.toUpperCase()}</Link>
        </li>
        <li onClick={handleScrollToTop}>
          {currentPath === "/videos" && <div className="nav-clicked">✪</div>}
          <Link to={"/videos"}>{`videos`.toUpperCase()}</Link>
        </li>
        <li onClick={handleScrollToTop}>
          {currentPath === "/tour" && <div className="nav-clicked">✪</div>}
          <Link to={"/tour"}>{`tour`.toUpperCase()}</Link>
        </li>
        <li onClick={handleScrollToTop}>
          <Link to={"/store?page=1"}>{`store`.toUpperCase()}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
