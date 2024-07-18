import { useLocation } from "react-router-dom";

function Star({ link }) {
  const { pathname } = useLocation();

  if (pathname === link || pathname.includes(`${link}/products`))
    return <div className="nav-clicked">✪</div>;
}

export default Star;
