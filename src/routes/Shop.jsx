import Banner from "./Banner";
import Nav from "./Nav";
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Shop() {
  console.log("Built by Bae");
  const [cartNum, setCartNum] = useState();

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>conangray.com</Link>
          </li>
          <li>
            <Link to={"/store"}>{`Store`.toUpperCase()}</Link>
          </li>
          <li>
            <Link to={"/store/music"}>{`Music`.toUpperCase()}</Link>
          </li>
          <li>
            <Link to={"/store/merch"}>{`Merch`.toUpperCase()}</Link>
          </li>
          <li>
            <Link to={"/store/shopping-cart"}>{`Cart`.toUpperCase()}</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Banner />
    </>
  );
}

export default Shop;
