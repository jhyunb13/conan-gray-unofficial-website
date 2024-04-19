import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const nav = [
    { category: "Home", link: `/` },
    { category: "listen", link: `listen` },
    { category: "videos", link: `videos` },
    { category: "tour", link: `tour` },
    { category: "store", link: `store` },
  ];

  function handleScrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <nav>
      <ul>
        {nav.map((n) => {
          return (
            <li onClick={handleScrollToTop} key={n.category}>
              {(currentPath === n.link || currentPath === `/${n.link}`) && (
                <div className="nav-clicked">✪</div>
              )}
              {n.category === "store" ? (
                <Link to={`${n.link}?page=1`}>{n.category.toUpperCase()}</Link>
              ) : (
                <Link to={n.link}>{n.category.toUpperCase()}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
