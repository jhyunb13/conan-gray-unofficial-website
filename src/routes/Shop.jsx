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
            <Link to={"/store"}>Store</Link>
          </li>
          <li>
            <Link to={"/store/music"}>Music</Link>
          </li>
          <li>
            <Link to={"/store/merch"}>Merch</Link>
          </li>
          <li>
            <Link to={"/store/shopping-cart"}>Cart{cartNum}</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Banner />
    </>
  );
}

export default Shop;
